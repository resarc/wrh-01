export default function Button({
  title
}:{
  title: string
}) {
  return(
    <button className="bg-wrh-blue min-w-[100px] rounded-t-lg px-4">
      {title}
    </button>
  )
}