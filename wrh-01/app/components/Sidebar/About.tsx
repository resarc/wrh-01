import CloseButton from '@/app/components/CloseButton'
import ContentBlock from '@/app/components/ContentBlock'

export default function Panel({
  about, selected, setSelected
}:{
  about: React.ReactNode
  selected: string
  setSelected: any
}) {
  const triggerClose = () => {
    setSelected('')
  }
  const onSelected = selected == 'about' ? 'z-20' : ''

  return(
    <div className={`about absolute bg-wrh-green flex gap-x-4 h-full px-8 py-10 w-full ${onSelected}`}>
      <div className="w-full">
        <ContentBlock data={about} />
      </div>
      <button className="h-fit p-2" onClick={triggerClose} >
        <CloseButton />
      </button>
    </div>
  )
}