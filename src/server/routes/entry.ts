import express from 'express'

import createRiskData from '../util/algorithm/createRiskData'
import adminHandler from '../middleware/admin'
import {
  createEntry,
  getEntries,
  getEntry,
  getUserEntries,
} from '../services/entry'

import { EntryValues, RequestWithUser } from '../types'

const entryRouter = express.Router()

entryRouter.get('/', adminHandler, async (req, res) => {
  const entries = await getEntries()

  return res.status(200).send(entries)
})

entryRouter.get('/user', async (req: RequestWithUser, res: any) => {
  const userId = req.user?.id
  const entries = await getUserEntries(userId)
  return res.status(200).send(entries)
})

entryRouter.get('/:entryId', async (req: RequestWithUser, res: any) => {
  const { entryId } = req.params
  const userId = req.user?.id

  const entry = await getEntry(entryId, userId)

  return res.status(200).send(entry)
})

entryRouter.post('/:surveyId', async (req: RequestWithUser, res: any) => {
  const { surveyId } = req.params
  const { sessionToken, data } = req.body
  const userId = req.user?.id || `publicUser-${sessionToken}`

  const riskData = await createRiskData(data)

  if (!riskData) return res.status(500).send('Error when calculating risks')

  const updatedData: EntryValues = { sessionToken, data: riskData }

  const entry = await createEntry(userId, surveyId, updatedData)

  return res.status(201).send(entry.data)
})

export default entryRouter
