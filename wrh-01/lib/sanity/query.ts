import { defineQuery } from 'next-sanity'

export const BOOKS_QUERY =
defineQuery(`*[_type == 'book'] {
  _id,
  title,
  slug, 
}`)

export const BOOK_QUERY = 
defineQuery(`*[_type == 'book' && slug == $slug][0] {
  _id,
  title,
  slug,
  'coverImage': coverImage.asset->url,
  'pdf': pdf.asset->url,
  bookmark,
  info,
}`)