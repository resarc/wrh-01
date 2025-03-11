import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const	projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const	dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const	apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
	useCdn: typeof document !== 'undefined',
  stega: { studioUrl: 'http://localhost:3333' }
})

export const urlFor = (source) => imageUrlBuilder({ projectId, dataset, apiVersion }).image(source)