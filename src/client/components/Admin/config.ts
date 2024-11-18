import { InfoType } from '@backend/types'
import { Dimension } from '../../types'

export const recommendationTypes: InfoType[] = [
  {
    id: 'common',
    title: {
      fi: 'Yleinen',
      sv: '[SV] Yleinen',
      en: 'Common',
    },
  },
]

export const allSelection: Dimension = {
  id: 'allDimensions',
  label: 'allDimensions',
  color: '#000000',
  title: {
    fi: 'Kaikki',
    sv: '[SV] All',
    en: 'All',
  },
  text: {
    fi: 'Kaikki',
    sv: '[SV] All',
    en: 'All',
  },
}

export const languages: InfoType[] = [
  {
    id: 'en',
    title: {
      fi: 'englanti',
      sv: 'engelska',
      en: 'English',
    },
  },
  {
    id: 'sv',
    title: {
      fi: 'ruotsi',
      sv: 'svenska',
      en: 'Swedish',
    },
  },
]

export const questionTypes: InfoType[] = [
  {
    id: 'singleChoice',
    title: {
      fi: 'Yksittäis valinta',
      sv: '[SV] Yksittäis valinta',
      en: 'Yksittäis valinta',
    },
  },
  {
    id: 'multipleChoice',
    title: {
      fi: 'Monivalinta',
      sv: '[SV] Monivalinta',
      en: 'Monivalinta',
    },
  },
  {
    id: 'info',
    title: {
      fi: 'Infokenttä',
      sv: '[SV] Infokenttä',
      en: 'Infokenttä',
    },
  },
]
