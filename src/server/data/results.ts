import { Result } from '../types'

const getResultData = (): Result[] => [
  {
    id: 1,
    surveyId: 1,
    optionLabel: 'corruption1',
    isSelected: {
      fi: '*Yhteistyökumppanin sijaintimaassa korruptio ei ole merkittävä riski*.',
      sv: '*[SV] Your collaboration partner is located in a country, where corruption does not pose a serious risk*.',
      en: '*Your collaboration partner is located in a country, where corruption does not pose a serious risk*.',
    },
    data: {
      title: {
        fi: 'Korruptio, 1',
        sv: '[SV] Korruptio, 1',
        en: 'Corruption, 1',
      },
    },
  },
  {
    id: 2,
    surveyId: 1,
    optionLabel: 'corruption2',
    isSelected: {
      fi: '*Yhteistyökumppanin sijaintimaassa korruption riski on kohonnut. Ota tämä huomioon yhteistyön suunnittelussa ja toteutuksessa.*',
      sv: '*[SV] Your collaboration partner is located in a country, where the risk of corruption is elevated. Take this into account in planning and implementing your collaboration.*',
      en: '*Your collaboration partner is located in a country, where the risk of corruption is elevated. Take this into account in planning and implementing your collaboration.*',
    },
    data: {
      title: {
        fi: 'Korruptio, 2',
        sv: '[SV] Korruptio, 2',
        en: 'Corruption, 2',
      },
    },
  },
  {
    id: 3,
    surveyId: 1,
    optionLabel: 'corruption3',
    isSelected: {
      fi: '*Yhteistyökumppanin sijaintimaassa korruption riski on merkittävä. Ota tämä huomioon yhteistyön suunnittelussa ja toteutuksessa ja varmistu, ettet osallistu korruptioon.*',
      sv: '*[SV] Your collaboration partner is located in a country, where the risk of corruption is significant. Take this into account in planning and implementing your collaboration, and make sure you do not engage in corruption.*',
      en: '*Your collaboration partner is located in a country, where the risk of corruption is significant. Take this into account in planning and implementing your collaboration, and make sure you do not engage in corruption.*',
    },
    data: {
      title: {
        fi: 'Korruptio, 3',
        sv: '[SV] Korruptio, 3',
        en: 'Corruption, 3',
      },
    },
  },
  {
    id: 4,
    surveyId: 1,
    optionLabel: 'safetyLevel1',
    isSelected: {
      fi: '*Yhteistyömaahan matkustamiseen ei liity rajoituksia. Varmistu halutessasi tarkemmin tilanteesta ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o). Helsingin yliopiston matkustusturvalllsuutta koskevat ohjeet löytyvät https://flamma.helsinki.fi/fi/group/matkustaminen/matkustusturvallisuus*',
      sv: '*[SV] Travelling to this country is not restricted. Feel free to find additional information from the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
      en: '*Travelling to this country is not restricted. Feel free to find additional information from the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
    },
    data: {
      title: {
        fi: 'Turvallisuustaso, 1',
        sv: '[SV] Turvallisuustaso, 1',
        en: 'Safety level, 1',
      },
    },
  },
  {
    id: 5,
    surveyId: 1,
    optionLabel: 'safetyLevel2',
    isSelected: {
      fi: '*Yhteistyömaahan matkustamiseen liittyy rajoituksia, jotka on syytä ottaa huomioon. Tutki tarkemmat yksityiskohdat ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o). Helsingin yliopiston matkustusturvalllsuutta koskevat ohjeet löytyvät https://flamma.helsinki.fi/fi/group/matkustaminen/matkustusturvallisuus*',
      sv: '*[SV] Travelling to this country may be restricted. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
      en: '*Travelling to this country may be restricted. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
    },
    data: {
      title: {
        fi: 'Turvallisuustaso, 2',
        sv: '[SV] Turvallisuustaso, 2',
        en: 'Safety level, 2',
      },
    },
  },
  {
    id: 6,
    surveyId: 1,
    optionLabel: 'safetyLevel3',
    isSelected: {
      fi: '*Yhteistyömaahan matkustaminen ei ole tällä hetkellä mahdollista. Tutki tarkemmat yksityiskohdat ulkoministeriön [matkustustiedotteista](https://um.fi/matkustustiedotteet-a-o). Helsingin yliopiston matkustusturvalllsuutta koskevat ohjeet löytyvät https://flamma.helsinki.fi/fi/group/matkustaminen/matkustusturvallisuus*',
      sv: '*[SV] Travelling to this country is not possible at the moment. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
      en: '*Travelling to this country is not possible at the moment. Please review details at the Ministry of Foreign Affairs [travel advisory](https://um.fi/matkustustiedotteet-a-o), in Finnish only. University`s travel safety instructions are available at https://flamma.helsinki.fi/en/group/matkustaminen/matkustusturvallisuus*',
    },
    data: {
      title: {
        fi: 'Turvallisuustaso, 3',
        sv: '[SV] Turvallisuustaso, 3',
        en: 'Safety level, 3',
      },
    },
  },
  {
    id: 7,
    surveyId: 1,
    optionLabel: 'HCI1',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee kehittyneessä maassa.*',
      sv: '*[SV] Your partner is located in a developed country.*',
      en: '*Your partner is located in a developed country.*',
    },
    data: {
      title: {
        fi: 'Maan kehittyneisyys, 1',
        sv: '[SV] Maan kehittyneisyys, 1',
        en: 'Human development, 1',
      },
    },
  },
  {
    id: 8,
    surveyId: 1,
    optionLabel: 'HCI2',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee vähemmän kehittyneessä maassa, millä saattaa olla vaikutusta yhteistyön suunnitteluun ja toteutukseen.*',
      sv: '*[SV] Your partner is located in a less-developed country, which might affect planning and implementing the collaboration.*',
      en: '*Your partner is located in a less-developed country, which might affect planning and implementing the collaboration.*',
    },
    data: {
      title: {
        fi: 'Maan kehittyneisyys, 2',
        sv: '[SV] Maan kehittyneisyys, 2',
        en: 'Human development, 2',
      },
    },
  },
  {
    id: 9,
    surveyId: 1,
    optionLabel: 'HCI3',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee vähiten kehittyneessä maassa. Tämä ei itsessään ole välttämättä riski, mutta ota tämä kuitenkin huomioon yhteistyön suunnittelussa ja toteutuksessa*',
      sv: '*[SV] Your partner is located in a least developed country. In and by itself, this is not a risk, but you should still take this into account in planning and implementing phases.*',
      en: '*Your partner is located in a least developed country. In and by itself, this is not a risk, but you should still take this into account in planning and implementing phases.*',
    },
    data: {
      title: {
        fi: 'Maan kehittyneisyys, 3',
        sv: '[SV] Maan kehittyneisyys, 3',
        en: 'Human development, 3',
      },
    },
  },
  {
    id: 10,
    surveyId: 1,
    optionLabel: 'academicFreedom1',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa akateeminen vapaus on hyvällä tasolla.*',
      sv: '*[SV] Your collaboration partner is located in a country, where academic freedom is at a good level.*',
      en: '*Your collaboration partner is located in a country, where academic freedom is at a good level.*',
    },
    data: {
      title: {
        fi: 'Akateeminen vapaus, 1',
        sv: '[SV] Akateeminen vapaus, 1',
        en: 'Academic freedom, 1',
      },
    },
  },
  {
    id: 11,
    surveyId: 1,
    optionLabel: 'academicFreedom2',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa akateeminen vapaus on jonkin verran rajoitettua. Huomioi tämä yhteistyön toteutuksessa.*',
      sv: '*[SV] Your collaboration partner is located in a country, where academic freedom is somewhat restricted. Take this into account in implementation.*',
      en: '*Your collaboration partner is located in a country, where academic freedom is somewhat restricted. Take this into account in implementation.*',
    },
    data: {
      title: {
        fi: 'Akateeminen vapaus, 2',
        sv: '[SV] Akateeminen vapaus, 2',
        en: 'Academic freedom, 2',
      },
    },
  },
  {
    id: 12,
    surveyId: 1,
    optionLabel: 'academicFreedom3',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa akateeminen vapaus on hyvin rajoitettua. Harkitse yhteistyötä tarkasti tästä ja yliopiston [arvojen](https://www.helsinki.fi/fi/tutustu-meihin/strategia-talous-ja-laatu/strategia-2021-2030/arvot) näkökulmasta*',
      sv: "*[SV] Your collaboration partner is located in a country, where academic freedom very restricted. Consider your collaboration, and whether it is compatible with University's [values](https://www.helsinki.fi/en/about-us/strategy-economy-and-quality/strategic-plan-2021-2030/values)*",
      en: "*Your collaboration partner is located in a country, where academic freedom very restricted. Consider your collaboration, and whether it is compatible with University's [values](https://www.helsinki.fi/en/about-us/strategy-economy-and-quality/strategic-plan-2021-2030/values)*",
    },
    data: {
      title: {
        fi: 'Akateeminen vapaus, 3',
        sv: '[SV] Akateeminen vapaus, 3',
        en: 'Academic freedom, 3',
      },
    },
  },
  {
    id: 13,
    surveyId: 1,
    optionLabel: 'politicalStability1',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee poliittisesti vakaassa maassa.*',
      sv: '*[SV] Your collaboration partner is located in a politically stable country.*',
      en: '*Your collaboration partner is located in a politically stable country.*',
    },
    data: {
      title: {
        fi: 'Poliittinen vakaus, 1',
        sv: '[SV] Poliittinen vakaus, 1',
        en: 'Political stability, 1',
      },
    },
  },
  {
    id: 14,
    surveyId: 1,
    optionLabel: 'politicalStability2',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee poliittisesti melko epävakaassa maassa.*',
      sv: '*[SV] Your collaboration partner is located in a politically somewhat unstable country.*',
      en: '*Your collaboration partner is located in a politically somewhat unstable country.*',
    },
    data: {
      title: {
        fi: 'Poliittinen vakaus, 2',
        sv: '[SV] Poliittinen vakaus, 2',
        en: 'Political stability, 2',
      },
    },
  },
  {
    id: 15,
    surveyId: 1,
    optionLabel: 'politicalStability3',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee poliittisesti epävakaassa maassa.*',
      sv: '*[SV] Your collaboration partner is located in a politically unstable country.*',
      en: '*Your collaboration partner is located in a politically unstable country.*',
    },
    data: {
      title: {
        fi: 'Poliittinen vakaus, 3',
        sv: '[SV] Poliittinen vakaus, 3',
        en: 'Political stability, 3',
      },
    },
  },
  {
    id: 16,
    surveyId: 1,
    optionLabel: 'total1',
    isSelected: {
      fi: '*Yhteistyön kokonaisriski on alhainen. Yhteistyössä voi kuitenkin esiintyä tunnistamattomia riskejä ja nyt arvioitujen asioiden riskitaso saattaa muuttua jatkossa.*',
      sv: '*[SV] Risk level is low. However, the collaboration may entail unidentified risks and the risks assessed here may change in the future.*',
      en: '*Risk level is low. However, the collaboration may entail unidentified risks and the risks assessed here may change in the future.*',
    },
    data: {
      title: {
        fi: 'Kokonaisriskitaso, 1',
        sv: '[SV] Kokonaisriskitaso, 1',
        en: 'Total risk level, 1',
      },
    },
  },
  {
    id: 17,
    surveyId: 1,
    optionLabel: 'total2',
    isSelected: {
      fi: '*Yhteistyön kokonaisriskitaso on kohonnut. Kiinnitä erityistä huomiota kohonneisiin riskeihin ja mieti niiden hallintaa. Toteuta tarvittaessa yksityiskohtaisempi riskiarvio.*',
      sv: '*[SV] Risk-level is elevated. Pay attention to individual risks and their management. Undertake a more detailed risk assessment, if necessary.*',
      en: '*Risk-level is elevated. Pay attention to individual risks and their management. Undertake a more detailed risk assessment, if necessary.*',
    },
    data: {
      title: {
        fi: 'Kokonaisriskitaso, 2',
        sv: '[SV] Kokonaisriskitaso, 2',
        en: 'Total risk level, 2',
      },
    },
  },
  {
    id: 18,
    surveyId: 1,
    optionLabel: 'total3',
    isSelected: {
      fi: '*Yhteistyön kokonaisriskitaso on merkittävä. Yksityiskohtaisemman riskiarvion toteuttaminen on suositeltavaa. Ryhdy myös toimenpiteisiin tunnistettujen riskien hallitsemiseksi.*',
      sv: '*[SV] Risk level is high. It is highly recommendable to undertake a more detailed risk assessment, and take action on individual risks indentified here.*',
      en: '*Risk level is high. It is highly recommendable to undertake a more detailed risk assessment, and take action on individual risks indentified here.*',
    },
    data: {
      title: {
        fi: 'Kokonaisriskitaso, 3',
        sv: '[SV] Kokonaisriskitaso, 3',
        en: 'Total risk level, 3',
      },
    },
  },
  {
    id: 19,
    surveyId: 1,
    optionLabel: 'GDPR1',
    isSelected: {
      fi: '*Antamisesi tietojen perusteella yhteistyöhön ei kohdistu tietousuojamielessä erityisiä vaatimuksia mutta varmistu, että henkilötietoja ei yhteistyössä tarvitse luovuttaa.*',
      sv: '*[SV] Antamisesi tietojen perusteella yhteistyöhön ei kohdistu tietousuojamielessä erityisiä vaatimuksia mutta varmistu, että henkilötietoja ei yhteistyössä tarvitse luovuttaa.*',
      en: '*Based on the information you have provided, GDPR is not applicable, but please double check, if this really is the case.*',
    },
    data: {
      title: {
        fi: 'GDPR, 1',
        sv: 'GDPR, 1',
        en: 'GDPR, 1',
      },
    },
  },
  {
    id: 20,
    surveyId: 1,
    optionLabel: 'GDPR2',
    isSelected: {
      fi: '*Henkilötietojen luovuttamista koskee EU:n GDPR-sääntely. Yhteistyökumppanisi sijaintimaa kuuluu helpotetun menettelyn mukaisiin maihin, mutta tutustu tarkempiin ohjeisiin [Flammassa.](https://flamma.helsinki.fi/fi/group/turvallisuus/tietosuoja#menu10)',
      sv: '*[SV] Handing over personal data requires GDPR compliance. Your partner is located in a country with limited compliance requirements, but please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
      en: '*Handing over personal data requires GDPR compliance. Your partner is located in a country with limited compliance requirements, but please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
    },
    data: {
      title: {
        fi: 'GDPR, 2',
        sv: 'GDPR, 2',
        en: 'GDPR, 2',
      },
    },
  },
  {
    id: 21,
    surveyId: 1,
    optionLabel: 'GDPR3',
    isSelected: {
      fi: '*Henkilötietojen luovuttamista koskee EU:n GDPR-sääntely. Tutustu tarkempiin ohjeisiin [Flammassa.](https://flamma.helsinki.fi/fi/group/turvallisuus/tietosuoja#menu10)*',
      sv: '*[SV] Handing over personal data requires GDPR compliance. Please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
      en: '*Handing over personal data requires GDPR compliance. Please review instructions at [Flamma.](https://flamma.helsinki.fi/en/group/turvallisuus/tietosuoja)*',
    },
    data: {
      title: {
        fi: 'GDPR, 3',
        sv: 'GDPR, 3',
        en: 'GDPR, 3',
      },
    },
  },
  {
    id: 22,
    surveyId: 1,
    optionLabel: 'organisation1',
    isSelected: {
      fi: '*Yhteistyökumppani löytyy EU:n komission rahoittamiskelpoisten organisaatioiden listalta, joten sitä voidaan pitää luotettavana.*',
      sv: '*[SV] Yhteistyökumppani löytyy EU:n komission rahoittamiskelpoisten organisaatioiden listalta, joten sitä voidaan pitää luotettavana.*',
      en: "*Partner organisation appeard on the EU Commission's list ot eligible organisations, and may be trusted.*",
    },
    data: {
      title: {
        fi: 'Organisaatio, 1',
        sv: '[SV] Organisaatio, 1',
        en: 'Organisation, 1',
      },
    },
  },
  {
    id: 23,
    surveyId: 1,
    optionLabel: 'organisation2',
    isSelected: {
      fi: '*Yhteistyökumppani ei kuulu EUn komission tunnistamiin kumppaniorganisaatioihin, mutta sen kanssa on tehty aiempaa yhteistyötä. Jos luotat edelleen yhteistyökumppaniin, voit edetä yhteistyön suunnittelussa ja toteutuksessa.*',
      sv: '*[SV] Yhteistyökumppani ei kuulu EUn komission tunnistamiin kumppaniorganisaatioihin, mutta sen kanssa on tehty aiempaa yhteistyötä. Jos luotat edelleen yhteistyökumppaniin, voit edetä yhteistyön suunnittelussa ja toteutuksessa.*',
      en: '*Partner organisation does not appear on EU Comission list of approved organisations, but there is a history of previous collaboration. If you continue to trust the partner organisation, you can go ahead and continue planinning and implementing the collaboration.*',
    },
    data: {
      title: {
        fi: 'Organisaatio, 2',
        sv: '[SV] Organisaatio, 2',
        en: 'Organisation, 2',
      },
    },
  },
  {
    id: 24,
    surveyId: 1,
    optionLabel: 'organisation3',
    isSelected: {
      fi: '*Yhteistyökumppani ei kuulu EUn komission tunnistamiin kumppaniorganisaatioihin, eikä sen kanssa ole tehty aiempaa yhteistyötä. Selvitä kumppanin taustat ennen yhteistyöhön sitoutmista ja sen aloittamista.*',
      sv: '*[SV] Yhteistyökumppani ei kuulu EUn komission tunnistamiin kumppaniorganisaatioihin, eikä sen kanssa ole tehty aiempaa yhteistyötä. Selvitä kumppanin taustat ennen yhteistyöhön sitoutmista ja sen aloittamista.*',
      en: "*Partner organisation does not appear on EU Comission list of approved organisations, and there is no history of previous collaboration. Please investigate the partner's background before committing to collaboration.*",
    },
    data: {
      title: {
        fi: 'Organisaatio, 3',
        sv: '[SV] Organisaatio, 3',
        en: 'Organisation, 3',
      },
    },
  },
  {
    id: 25,
    surveyId: 1,
    optionLabel: 'dualUse1',
    isSelected: {
      fi: '*Antamiesi tietojen perusteella yhteistyö ei sisällä kaksoiskäyttöriskejä. Jos tästä kuitenkin on jotain epävarmuutta, tutustu yliopiston ohjeisiin.*',
      sv: '*[SV] Antamiesi tietojen perusteella yhteistyö ei sisällä kaksoiskäyttöriskejä. Jos tästä kuitenkin on jotain epävarmuutta, tutustu yliopiston ohjeisiin.*',
      en: '*Based on your response, this collaboration does not pose Dual Use risks. If there is any doubt, please review the instructions at Flamma.*',
    },
    data: {
      title: {
        fi: 'Kaksikäyttötuotteet, 1',
        sv: '[SV] Kaksikäyttötuotteet, 1',
        en: 'Dual use, 1',
      },
    },
  },
  {
    id: 26,
    surveyId: 1,
    optionLabel: 'dualUse2',
    isSelected: {
      fi: '*Olet ilmoittanut, että ei ole tiedossa onko yhteistyössä mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Intressimme ja myös lakisääteinen velvollisuutemme on varmistaa, että asiantuntijuuttamme tai teknologiaamme ei päädy sotilaalliseen loppukäyttöön pakotemaissa. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      sv: '*[SV] Olet ilmoittanut, että ei ole tiedossa onko yhteistyössä mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Intressimme ja myös lakisääteinen velvollisuutemme on varmistaa, että asiantuntijuuttamme tai teknologiaamme ei päädy sotilaalliseen loppukäyttöön pakotemaissa. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      en: '*According to the information provided, the possibility of military technology or related knowledge being tranferred to the partner in question in not certain. It is our interest, and legal requirement to ensure that our expertise or technology does not end up in military use in sanctioned countries. Please review related instructions in Flamma and contact Research Services experts, if necessary..*',
    },
    data: {
      title: {
        fi: 'Kaksikäyttötuotteet, 2',
        sv: '[SV] Kaksikäyttötuotteet, 2',
        en: 'Dual use, 2',
      },
    },
  },
  {
    id: 27,
    surveyId: 1,
    optionLabel: 'dualUse3',
    isSelected: {
      fi: '*Olet ilmoittanut, että yhteistyössä on mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Intressimme ja myös lakisääteinen velvollisuutemme on varmistaa, että asiantuntijuuttamme tai teknologiaamme ei päädy sotilaalliseen loppukäyttöön pakotemaissa. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      sv: '*[SV] Olet ilmoittanut, että yhteistyössä on mahdollisuus siihen, että kumppanille siirtyy sotilaskäyttöön soveltuvaa teknologiaa tai osaamista. Intressimme ja myös lakisääteinen velvollisuutemme on varmistaa, että asiantuntijuuttamme tai teknologiaamme ei päädy sotilaalliseen loppukäyttöön pakotemaissa. Tutustu tarkasti Flammassa oleviin ohjeisiin ja ota yhteyttä tarvittaessa yliopiston tutkimuspalveluiden asiantuntijoihin.*',
      en: '*According to the information provided, there is a possibility of military technology or related knowledge being tranferred to the partner in question. It is our interest, and legal requirement to ensure that our expertise or technology does not end up in military use in sanctioned countries. Please review related instructions in Flamma and contact Research Services experts, if necessary.*',
    },
    data: {
      title: {
        fi: 'Kaksikäyttötuotteet, 3',
        sv: '[SV] Kaksikäyttötuotteet, 3',
        en: 'Dual use, 3',
      },
    },
  },
  {
    id: 28,
    surveyId: 1,
    optionLabel: 'university1',
    isSelected: {
      fi: '*Yhteistyöyliopisto on listattu World Higher Education -tietokannassa.*',
      sv: '*[SV] Yhteistyöyliopisto on listattu World Higher Education -tietokannassa.*',
      en: '*Partner university is listed in the World Higher Education database.*',
    },
    data: {
      title: {
        fi: 'Yliopisto, 1',
        sv: '[SV] Yliopisto, 1',
        en: 'University, 1',
      },
    },
  },
  {
    id: 29,
    surveyId: 1,
    optionLabel: 'university2',
    isSelected: {
      fi: '*Yhteistyöyliopisto on listattu World Higher Education -tietokannassa.*',
      sv: '*[SV] Yhteistyöyliopisto on listattu World Higher Education -tietokannassa.*',
      en: '*Partner university is listed in the World Higher Education database.*',
    },
    data: {
      title: {
        fi: 'Yliopisto, 2',
        sv: '[SV] Yliopisto, 2',
        en: 'University, 2',
      },
    },
  },
  {
    id: 30,
    surveyId: 1,
    optionLabel: 'university3',
    isSelected: {
      fi: '*Yhteistyöyliopistoa ei löydy World Higher Education -tietokannasta. Varmista, että kyseessä on maansa virallisesti hyväksyttyihin kuuluva yliopisto.*',
      sv: '*[SV] Yhteistyöyliopistoa ei löydy World Higher Education -tietokannasta. Varmista, että kyseessä on maansa virallisesti hyväksyttyihin kuuluva yliopisto.*',
      en: '*Collaboration university is not part of the World Higher Education database. Please take steps to make sure, the partner is a legitimate university.*',
    },
    data: {
      title: {
        fi: 'Yliopisto, 3',
        sv: '[SV] Yliopisto, 3',
        en: 'University, 3',
      },
    },
  },
  {
    id: 31,
    surveyId: 1,
    optionLabel: 'ethical1',
    isSelected: {
      fi: '*Ilmoituksesi perusteella yhteistyössä ei ole erityisiä eettisiä haasteita.*',
      sv: '*[SV] Ilmoituksesi perusteella yhteistyössä ei ole erityisiä eettisiä haasteita.*',
      en: '*Based on the information you have provided, there are no specific ethical challenges in the collaboration.*',
    },
    data: {
      title: {
        fi: 'Eettisyys, 1',
        sv: '[SV] Eettisyys, 1',
        en: 'Ethics, 1',
      },
    },
  },
  {
    id: 32,
    surveyId: 1,
    optionLabel: 'ethical2',
    isSelected: {
      fi: '*Et ole varma yhteistyön eettisistä riskeistä. Voit halutessasi konsultoida yliopiston eettistä asiantuntijaneuvostoa (https://flamma.helsinki.fi/fi/group/yliopisto/eettinen-asiantuntijaneuvosto).*',
      sv: '*[SV] Et ole varma yhteistyön eettisistä riskeistä. Voit halutessasi konsultoida yliopiston eettistä asiantuntijaneuvostoa (https://flamma.helsinki.fi/fi/group/yliopisto/eettinen-asiantuntijaneuvosto).*',
      en: 'You are not sure if the collaboration includes ethical risks.',
    },
    data: {
      title: {
        fi: 'Eettisyys, 2',
        sv: '[SV] Eettisyys, 2',
        en: 'Ethics, 2',
      },
    },
  },
  {
    id: 33,
    surveyId: 1,
    optionLabel: 'ethical3',
    isSelected: {
      fi: '*Olet arvioinut yhteistyön eettiset riskit merkittäviksi. Suositus on, että konsultoit yliopiston eettistä asiantuntijaneuvostoa (https://flamma.helsinki.fi/fi/group/yliopisto/eettinen-asiantuntijaneuvosto) ennen yhteistyöhön sitoutuista.*',
      sv: '*[SV] Olet arvioinut yhteistyön eettiset riskit merkittäviksi. Suositus on, että konsultoit yliopiston eettistä asiantuntijaneuvostoa (https://flamma.helsinki.fi/fi/group/yliopisto/eettinen-asiantuntijaneuvosto) ennen yhteistyöhön sitoutuista.*',
      en: 'You have assessed the ethical risks of the collaboration as significant.',
    },
    data: {
      title: {
        fi: 'Eettisyys, 3',
        sv: '[SV] Eettisyys, 3',
        en: 'Ethics, 3',
      },
    },
  },
  {
    id: 34,
    surveyId: 1,
    optionLabel: 'sanctions3',
    isSelected: {
      fi: '*Lue lisää maahan kohdistuvista pakotteista [sanctionsmap.eu](https://sanctionsmap.eu/#/main)-sivulta*',
      sv: '*[SV] Lue lisää maahan kohdistuvista pakotteista [sanctionsmap.eu](https://sanctionsmap.eu/#/main)-sivulta*',
      en: '*Read more information about the sanctions at [sanctionsmap.eu](https://sanctionsmap.eu/#/main)*',
    },
    data: {
      title: {
        fi: 'Pakotteet, 3',
        sv: '[SV] Pakotteet, 3',
        en: 'Sanctions, 3',
      },
    },
  },
  {
    id: 35,
    surveyId: 1,
    optionLabel: 'economic3',
    isSelected: {
      fi: '*Yhteistyön taloudellinen laajuus on huomattava, ja siihen liittyvä riskitaso on merkittävä*',
      sv: '*[SV] Yhteistyön taloudellinen laajuus on huomattava, ja siihen liittyvä riskitaso on merkittävä*',
      en: '*The financial scope the collaboration is siginificant and poses a substantial risk*',
    },
    data: {
      title: {
        fi: 'Taloudellinen riski, 3',
        sv: '[SV] Taloudellinen riski, 3',
        en: 'Economical risk, 3',
      },
    },
  },
  {
    id: 36,
    surveyId: 1,
    optionLabel: 'economic2',
    isSelected: {
      fi: '*Yhteistyön taloudellinen laajuus on kohtalainen ja siihen liittyvä riskitaso on kohonnut*',
      sv: '*[SV] Yhteistyön taloudellinen laajuus on kohtalainen ja siihen liittyvä riskitaso on kohonnut*',
      en: '*The financial scope of the collaboration is moderate, and the related risk level is elevated*',
    },
    data: {
      title: {
        fi: 'Taloudellinen riski, 2',
        sv: '[SV] Taloudellinen riski, 2',
        en: 'Economical risk, 2',
      },
    },
  },
  {
    id: 37,
    surveyId: 1,
    optionLabel: 'economic1',
    isSelected: {
      fi: '*Yhteistyön taloudellinen laajuus ei ole merkittävä, eikä muodosta merkittävää riskiä*',
      sv: '*[SV] Yhteistyön taloudellinen laajuus ei ole merkittävä, eikä muodosta merkittävää riskiä*',
      en: '*The financial scope of the collaboration is not significant, and does not pose a substantial risk*',
    },
    data: {
      title: {
        fi: 'Taloudellinen riski, 1',
        sv: '[SV] Taloudellinen riski, 1',
        en: 'Economical risk, 1',
      },
    },
  },
  {
    id: 38,
    surveyId: 1,
    optionLabel: 'consortium1',
    isSelected: {
      fi: '*Monenkeskisessä yhteistyössäsi ei ole  yhteistyökumppaneita, jotka sijaitsevan korkean riski maissa*',
      sv: '*[SV] Monenkeskisessä yhteistyössäsi ei ole  yhteistyökumppaneita, jotka sijaitsevan korkean riski maissa*',
      en: '*Your multilateral collaboration does not include partners from high-risk countries*',
    },
    data: {
      title: {
        fi: 'Monenkeskeisyys, 1',
        sv: '[SV] Monenkeskeisyys, 1',
        en: 'Multilateral, 1',
      },
    },
  },
  {
    id: 39,
    surveyId: 1,
    optionLabel: 'consortium2',
    isSelected: {
      fi: '*Monenkeskisessä yhteistyössäsi on yksi yhteistyökumppani, joka sijaitsee korkean riski maassa. Harkitse, edelyttääkö tämä erityisiä riskien arvioinnin jatkotoimia ja ole tarvittaessa yhteydesssä risk-i@helsinki.fi*',
      sv: '*[SV] Monenkeskisessä yhteistyössäsi on yksi yhteistyökumppani, joka sijaitsee korkean riski maassa. Harkitse, edelyttääkö tämä erityisiä riskien arvioinnin jatkotoimia ja ole tarvittaessa yhteydesssä risk-i@helsinki.fi*',
      en: '*Your multilateral collaboration includes a partner from a high-risk country. Please consider, if this warrants further risk assessment actions. You may also consult risk-i@helsinki.fi*',
    },
    data: {
      title: {
        fi: 'Monenkeskeisyys, 2',
        sv: '[SV] Monenkeskeisyys, 2',
        en: 'Multilateral, 2',
      },
    },
  },
  {
    id: 40,
    surveyId: 1,
    optionLabel: 'consortium3',
    isSelected: {
      fi: '*Monenkeskisessä yhteistyössäsi on useampia yhteistyökumppaneita, jotka sijaitsevat korkean riski maissa. Ota tarvittaessa yhteydesssä risk-i@helsinki.fi*',
      sv: '*[SV] Monenkeskisessä yhteistyössäsi on useampia yhteistyökumppaneita, jotka sijaitsevat korkean riski maissa. Ota tarvittaessa yhteydesssä risk-i@helsinki.fi*',
      en: '*Your multilateral collaboration includes several partners from a high-risk country. Please consult risk-i@helsinki.fi*',
    },
    data: {
      title: {
        fi: 'Monenkeskeisyys, 3',
        sv: '[SV] Monenkeskeisyys, 3',
        en: 'Multilateral, 3',
      },
    },
  },
  {
    id: 41,
    surveyId: 1,
    optionLabel: 'ruleOfLaw1',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, joka on oikeusvaltiio, mikä tarkoittaa muun muasssa, että sopimuksiin liittyvä oikeussuoja on lähtökohtaisesti vahva. Tämä on kuitenkin vain perusta ja yhteistyösopimus on joka tapauksessa syytä laatia huolella.*',
      sv: '*[SV] Yhteistyökumppanisi sijaitsee maassa, joka on oikeusvaltiio, mikä tarkoittaa muun muasssa, että sopimuksiin liittyvä oikeussuoja on lähtökohtaisesti vahva. Tämä on kuitenkin vain perusta ja yhteistyösopimus on joka tapauksessa syytä laatia huolella.*',
      en: '*Your collaboration partner is located in a country, where rule of law is prevalent and agreements are normally followed and respected. As this is merely the point of departure, it is still necessary to  draw up an agreement with appropriate care.*',
    },
    data: {
      title: {
        fi: 'Oikeusvaltio, 1',
        sv: '[SV] Oikeusvaltio, 1',
        en: 'Rule of law, 1',
      },
    },
  },
  {
    id: 42,
    surveyId: 1,
    optionLabel: 'ruleOfLaw2',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa oikeusvaltioperiaate toteutuu vain osittain. Kiinnitä huomiota yhteistyösopimuksen muotoiluihin erityisesti valittavan oikeuspaikan ja riidanratkaisumekanisimien osalta. Konsultoi tarvittaessa yliopiston asiantuntijajuristeja.*',
      sv: '*[SV] Yhteistyökumppanisi sijaitsee maassa, jossa oikeusvaltioperiaate toteutuu vain osittain. Kiinnitä huomiota yhteistyösopimuksen muotoiluihin erityisesti valittavan oikeuspaikan ja riidanratkaisumekanisimien osalta. Konsultoi tarvittaessa yliopiston asiantuntijajuristeja.*',
      en: "*Your collaboration partner is located in a country, where rule of law is only partially adhered. Pay emphasis in the clauses concerning legal venue and resolution of disagreements in the collaboration agreement. Consider also consulting University's legal experts.*",
    },
    data: {
      title: {
        fi: 'Oikeusvaltio, 2',
        sv: '[SV] Oikeusvaltio, 2',
        en: 'Rule of law, 2',
      },
    },
  },
  {
    id: 43,
    surveyId: 1,
    optionLabel: 'ruleOfLaw3',
    isSelected: {
      fi: '*Yhteistyökumppanisi sijaitsee maassa, jossa oikeusvaltioperiaate on vakavasti vaarantunut. Varmistu siitä, että yhteistyösopimuksen muotoilut oikeuspaikan ja riidanratkaisumekanismien osalta on mietiitty tarkasti ja konsultoi yliopiston asiantuntijajuristeja.*',
      sv: '*[SV] Yhteistyökumppanisi sijaitsee maassa, jossa oikeusvaltioperiaate on vakavasti vaarantunut. Varmistu siitä, että yhteistyösopimuksen muotoilut oikeuspaikan ja riidanratkaisumekanismien osalta on mietiitty tarkasti ja konsultoi yliopiston asiantuntijajuristeja.*',
      en: "*Your collaboration partner is located in a country, which does not adhere to rule of law. Please ensure that your collaboration agreenent has clearly defined clauses for legal venue and resolution of disagreements. You should consult University's legal experts.*",
    },
    data: {
      title: {
        fi: 'Oikeusvaltio, 3',
        sv: '[SV] Oikeusvaltio, 3',
        en: 'Rule of law, 3',
      },
    },
  },
  {
    id: 44,
    surveyId: 1,
    optionLabel: 'country1',
    isSelected: {
      fi: '*Maan yhteenlaskettu kokonaisriskitaso on matala*',
      sv: '*[SV] Maan yhteenlaskettu kokonaisriskitaso on matala*',
      en: '*Total risk level of the selected country is low*',
    },
    data: {
      title: {
        fi: 'Maa, 1',
        sv: '[SV] Maa, 1',
        en: 'Country, 1',
      },
    },
  },
  {
    id: 45,
    surveyId: 1,
    optionLabel: 'country2',
    isSelected: {
      fi: '*Maan yhteenlaskettu kokonaisriskitaso on kohonnut*',
      sv: '*[SV] Maan yhteenlaskettu kokonaisriskitaso on kohonnut*',
      en: '*Total risk level of the selected country is elevated*',
    },
    data: {
      title: {
        fi: 'Maa, 2',
        sv: '[SV] Maa, 2',
        en: 'Country, 2',
      },
    },
  },
  {
    id: 46,
    surveyId: 1,
    optionLabel: 'country3',
    isSelected: {
      fi: '*Maan yhteenlaskettu kokonaisriskitaso on korkea*',
      sv: '*[SV] Maan yhteenlaskettu kokonaisriskitaso on korkea*',
      en: '*Total risk level of the selected country is high*',
    },
    data: {
      title: {
        fi: 'Maa, 3',
        sv: '[SV] Maa, 3',
        en: 'Country, 3',
      },
    },
  },
  {
    id: 47,
    surveyId: 1,
    optionLabel: 'sanctions1',
    isSelected: {
      fi: '*Maahan ei kohdistu pakotteita*',
      sv: '*[SV] Maahan ei kohdistu pakotteita*',
      en: '*There are no sanctions*',
    },
    data: {
      title: {
        fi: 'Pakotteet, 1',
        sv: '[SV] Pakotteet, 1',
        en: 'Sanctions, 1',
      },
    },
  },
]

export default getResultData
