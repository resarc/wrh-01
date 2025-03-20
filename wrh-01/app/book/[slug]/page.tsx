import type { Params, BookType } from '@/types'
import Reader from '@/app/components/Reader'
import { BOOK_QUERY, BOOKS_QUERY } from '@/lib/sanity/query'
import { client } from '@/lib/sanity/client'

export async function generateStaticParams() {
  const books:BookType[] = await client.fetch( BOOKS_QUERY )

  return books.map((book) => ({
    slug: book.slug
  }))
}

export default async function Souvenir(props: { params: Params }) {
  const { slug } = await props.params

  const book:BookType = await client.fetch(
    BOOK_QUERY, { slug }
  )

  return(
    <>
      <Reader file={book.pdf} info={book.info} bookmark={book.bookmark} />
    </>
  )
}