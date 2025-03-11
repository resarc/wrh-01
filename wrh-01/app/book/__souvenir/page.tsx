import type { BookType } from '@/types'
import Reader from '@/app/components/Reader'
import { BOOK_QUERY } from '@/lib/sanity/query'
import { client } from '@/lib/sanity/client'

export default async function Souvenir() {

  const book:BookType = await client.fetch(
    BOOK_QUERY, { slug: 'souvenir' }
  )

  return(
    <>
      <Reader file={book.pdf} info={book.info}/>
    </>
  )
}