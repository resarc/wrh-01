import type { Bookmark } from '@/types'
import CloseButton from '@/app/components/CloseButton'

export default function TOC({
  toc, selected, setSelected, bookmark, onPageChange, pageNumber
}:{
  toc: React.ReactNode
  selected: string
  setSelected: any
  bookmark: Bookmark[]
  onPageChange: any
  pageNumber: number
}) {
  const triggerClose = () => {
    setSelected('')
  }

  const onSelected = selected == 'toc' ? 'opacity-100 z-50' : 'opacity-0 z-10'

  return (
    <div className={`bookmark absolute bg-wrh-blue flex h-full w-full transition duration-700 ${onSelected}`}>
      <div className="hidden overflow-y-scroll pb-[10rem] pt-10 pl-8 pr-[6rem] w-full">
        {toc}
      </div>
      <div className="overflow-y-scroll pb-[10rem] pt-10 pl-8 pr-[6rem] w-full">
        {bookmark &&
          bookmark.map((item, index) => 
            <button 
              key={index}
              className="bookmark-item border-b last:border-b-0 border-white flex flex-col py-4 first:pt-0 w-full"
              onClick={() => { 
                onPageChange(item.pageNo, 'next')
                triggerClose() 
              }}
            >
              <p className="pl-[1.8rem] -indent-[1.2rem] text-left w-full">{item.title_th}</p>
              <p className="pl-[1.8rem] -indent-[1.2rem] text-left w-full">{item.title_en}</p>
            </button>
          )
        }
      </div>
      <button className="absolute right-[2rem] top-[2.5rem] h-fit p-2" onClick={triggerClose} >
        <CloseButton />
      </button>
    </div>
  )
}