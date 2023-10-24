import React from 'react'
import { Controller } from 'react-hook-form'
import { Autocomplete, Box, TextField } from '@mui/material'

import { useTranslation } from 'react-i18next'

import { Locales } from '@backend/types'

import useCountry from '../../hooks/useCountryData'
import { InputProps } from '../../types'
import LoadingProgress from '../Common/LoadingProgress'

const DropDownSelect = ({
  control,
  question,
  children,
  selectedCountry,
}: InputProps) => {
  const { country } = useCountry(selectedCountry)

  const { t, i18n } = useTranslation()
  const { language } = i18n

  if (!question) return null

  if (!selectedCountry && question.id === 20)
    return (
      <Box>
        <i>{t('questions:selectUniversityInfoMessage')}</i>
      </Box>
    )

  return (
    <>
      {!country && question.id === 20 ? (
        <LoadingProgress />
      ) : (
        <Controller
          control={control}
          name={question.id.toString()}
          defaultValue=""
          render={({ field: { onChange } }) => (
            <Box justifyContent="center">
              <Autocomplete
                disablePortal
                id={`select-${question.id.toString()}`}
                options={
                  question.id === 20 && country?.universities
                    ? country?.universities
                    : question.optionData.options
                }
                getOptionLabel={(option) => option}
                onChange={(e, data) => onChange(data)}
                sx={{ width: '50%' }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label={
                      question.optionData.label
                        ? question.optionData.label[language as keyof Locales]
                        : ''
                    }
                  />
                )}
              />
            </Box>
          )}
        />
      )}
      {children}
    </>
  )
}

export default DropDownSelect
