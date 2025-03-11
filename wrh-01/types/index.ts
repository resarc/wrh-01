import { TypedObject } from '@portabletext/types'

export type Params = Promise<{ slug: string }>

export type BookType = {
  _id: string
  title: string
  slug: string
  coverImage: string
  pdf: string
  info: TypedObject
}