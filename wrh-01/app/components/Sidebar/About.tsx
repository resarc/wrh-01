import { TypedObject } from '@portabletext/types'
import CloseButton from '@/app/components/CloseButton'
import ContentBlock from '@/app/components/ContentBlock'

export default function Panel({
  about, selected, setSelected
}:{
  about: TypedObject
  selected: string
  setSelected: any
}) {
  const triggerClose = () => {
    setSelected('')
  }
  const onSelected = selected == 'about' ? 'z-20' : ''

  return(
    <div className={`about absolute bg-wrh-green flex h-full w-full ${onSelected}`}>
      <div className="overflow-y-scroll pb-[10rem] pt-10 pl-8 pr-[6rem] w-full">
        <ContentBlock data={about} />
      </div>
      <button className="absolute right-[2rem] top-[2.5rem] h-fit p-2" onClick={triggerClose} >
        <CloseButton />
      </button>
    </div>
  )
}