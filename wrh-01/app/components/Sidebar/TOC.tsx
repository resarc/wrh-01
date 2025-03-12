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

  const onSelected = selected == 'toc' ? 'z-20' : ''

  return (
    <div className={`bookmark absolute bg-wrh-blue flex gap-x-4 left-0 px-8 py-10 top-0 h-full w-full ${onSelected}`}>
      <div className="overflow-y-scroll w-full">
        {toc}
      </div>
      <button className="h-fit p-2" onClick={triggerClose} >
        <CloseButton />
      </button>
    </div>
  )
}