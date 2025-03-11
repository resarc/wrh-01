export default function Label({
  children
} : {
  children: React.ReactNode
}) {
  return(
    <div className="absolute grid gap-y-2 py-4 px-6 text-center w-full">
      {children}
    </div>
  )
}