import type { BookType } from '@/types'
import Image from "next/image"
import Column from './components/Column'
import Label from './components/Label'
import { HOME_QUERY } from '@/lib/sanity/query'
import { client } from '@/lib/sanity/client'

export default async function Home() {
  const homeData:BookType[] = await client.fetch(
    HOME_QUERY
  )

  return (
    <div className="hidden md:grid min-h-screen font-[family-name:var(--font-geist-sans)] text-wrh-green">
      <main className="grid grid-rows-[max-content_1fr]">
        
        {/* Main */}
        <section className="flex h-dvh overflow-y-hidden">
          {/* Left */}
          <Column href="/book/ratchaburi">
            <div className="aspect-[3/4] bg-green-900 h-max w-full">
              <Image
                src={homeData[0].coverImage}
                alt="Ratchaburi"
                fill
                priority
              />
            </div>
            <Label>
              <p>{homeData[0].title_th}</p>
              <p>{homeData[0].title}</p>
            </Label>
          </Column>
          {/* Separator */}
          <div className="bg-wrh-green h-full w-[2px]"></div>
          {/* Right */}
          <Column href="/book/souvenir">
            <div className="aspect-[3/4] bg-green-900 h-max w-full">
              <Image
                src={homeData[1].coverImage}
                alt="Souvenir"
                fill
                priority
              />
            </div>
            <Label>
              <p>{homeData[1].title_th}</p>
              <p>{homeData[1].title}</p>
            </Label>
          </Column>
        </section>
      </main>
    </div>
  );
}
