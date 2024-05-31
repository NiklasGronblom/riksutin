/* eslint-disable no-restricted-syntax */
import logger from '../../logger'
import scheduleCronJob from '../schedule'
import { getCountries, getCountryData } from '../../../routes/country'
import { set } from '../../redis'

const calculateTotalRisk = async (countryCode: string) => {
  const countryData = await getCountryData(countryCode)
  if (!countryData) return null
  const { code, createdAt, gdpr, universities, sanctions, ...numberRisks } =
    countryData

  const riskValues = Object.values(numberRisks)

  const sanctionsRiskLevel = countryData.sanctions ? 2 : 1

  const totalCountryRiskLevel =
    Math.round(
      riskValues.concat(sanctionsRiskLevel).reduce((a, b) => a + b, 0) /
        riskValues.length
    ) || 0

  return totalCountryRiskLevel
}

const run = async () => {
  logger.info('Getting high risk countries')
  const countries = await getCountries()
  const highRiskCountries = []

  for (const country of countries) {
    // eslint-disable-next-line no-await-in-loop
    const totalRisk = await calculateTotalRisk(country.code)
    if (totalRisk === 3) {
      highRiskCountries.push(country)
    }
  }
  set('high risk countries', highRiskCountries)
}

const startCountryCron = async () => {
  const cronTime = '0 0 * * 0'
  logger.info('Cron job scheduled')
  return scheduleCronJob(cronTime, run)
}

export default startCountryCron
