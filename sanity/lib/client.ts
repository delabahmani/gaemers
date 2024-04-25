import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion: '2024-04-25',
  dataset: 'production',
  projectId: 'i5x7q23g',
  useCdn: false,
})
