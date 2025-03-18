import CloseButton from '@/app/components/CloseButton'

export default function TOC({
  toc, selected, setSelected
}:{
  toc: React.ReactNode
  selected: string
  setSelected: any
}) {
  const triggerClose = () => {
    setSelected('')
  }

  const onSelected = selected == 'toc' ? 'opacity-100 z-50' : 'opacity-0 z-10'

  return (
    <div className={`bookmark absolute bg-wrh-blue flex h-full w-full transition duration-700 ${onSelected}`}>
      <div className="overflow-y-scroll pb-[10rem] pt-10 pl-8 pr-[6rem] w-full">
        {toc}
      </div>
      <button className="absolute right-[2rem] top-[2.5rem] h-fit p-2" onClick={triggerClose} >
        <CloseButton />
      </button>
    </div>
  )
}