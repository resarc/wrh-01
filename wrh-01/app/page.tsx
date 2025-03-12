import Image from "next/image"
import Column from './components/Column'
import Label from './components/Label'

export default function Home() {
  return (
    <div className="grid min-h-screen font-[family-name:var(--font-geist-sans)] text-wrh-green">
      <main className="grid grid-rows-[max-content_1fr]">
        {/* Top */}
        {/* <section className="flex items-center justify-center py-6">
          <Image
            className="relative left-[-15px]"
            src="/logo/WRH_logo.svg"
            alt="The Wireless House logo"
            width={129}
            height={70}
            priority
          />
        </section> */}
        
        {/* Main */}
        <section className="flex h-dvh overflow-y-hidden">
          {/* Left */}
          <Column href="/book/ratchaburi">
            <div className="aspect-[3/4] bg-red-200 h-max w-full">
              <Image
                src="https://cdn.sanity.io/images/6lbaze29/production/1f4a8389ed5530e2ef0b981a8467baec8c22d49b-1848x2748.jpg"
                alt="Ratchaburi"
                fill
                priority
              />
            </div>
            <Label>
              <p>สมุดราชบุรี</p>
              <p>Ratchaburi Register</p>
            </Label>
          </Column>
          {/* Separator */}
          <div className="bg-wrh-green h-full w-[2px]"></div>
          {/* Right */}
          <Column href="/book/souvenir">
            <div className="aspect-[3/4] bg-red-200 h-max w-full">
              <Image
                src="https://cdn.sanity.io/images/6lbaze29/production/eeeaee9c2541c9c238098989a9d6c0beea9cfe3e-2619x3381.jpg"
                alt="Souvenir"
                fill
                priority
              />
            </div>
            <Label>
              <p>ที่ระลึก สยามรัฐพิพิธภัณฑ์ สวนลุมพินี พระพุทธศักราช 2468</p>
              <p>The Souvenir of the Siamese Kingdom Exhibition at Lumpini Park B.E. 2468</p>
            </Label>
          </Column>
        </section>
      </main>
    </div>
  );
}
