import HomeButton from '@/app/components/HomeButton'

export const revalidate = 1000

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="relative left-[50px] w-[calc(100vw-50px)]">

      <HomeButton />
      {children}
    </main>
  )
}
