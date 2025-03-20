import { TypedObject } from '@portabletext/types'

export type Params = Promise<{ slug: string }>

export type BookType = {
  _id: string
  title: string
  slug: string
  coverImage: string
  pdf: string
  bookmark: Bookmark
  info: TypedObject
}

export type Bookmark = {
  title_th: string
  title_en: string
  pageNo: number
}