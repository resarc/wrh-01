export default function Column({
  children,
  href
}:{
  children: React.ReactNode
  href: string
}) {
  return(
    <div className="flex flex-col items-center justify-center relative -top-[7%] w-full">
      <a className="relative w-[60%]" href={href}>
      {children}
      </a>
    </div>
  )
}