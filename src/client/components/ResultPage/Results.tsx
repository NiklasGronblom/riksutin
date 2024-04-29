import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Button, Typography } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'

import RenderResults from './RenderResults'
import SurveyButtons from '../Common/SurveyButtons'

import styles from '../../styles'
import { LOCATION_KEY } from '../../../config'
import { RiskData } from '../../types'

const { resultStyles } = styles

const Results = ({
  setShowResults,
  riskData,
}: {
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>
  riskData: RiskData
}) => {
  const { t } = useTranslation()
  const { survey } = useSurvey()

  if (!survey || !riskData) return null

  const onNavigateBack = () => {
    sessionStorage.setItem(LOCATION_KEY, 'form')
    setShowResults(false)

    document
      ?.getElementById('survey-main-section')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Box>
      <Typography
        data-cy="result-section-title"
        variant="h5"
        sx={resultStyles.heading}
        component="div"
      >
        {t('results:title')}
      </Typography>

      <RenderResults riskData={riskData} />

      <SurveyButtons>
        <Button data-cy="back-to-selections" onClick={onNavigateBack}>
          {'<'} {t('results:backToMessage')}
        </Button>
      </SurveyButtons>
    </Box>
  )
}

export default Results
