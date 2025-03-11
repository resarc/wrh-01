import { TypedObject } from '@portabletext/types'

export type BookType = {
  _id: string
  title: string
  coverImage: string
  pdf: string
  info: TypedObject
}