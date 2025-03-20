'use client'
import type { Bookmark } from '@/types'
import { TypedObject } from '@portabletext/types'
import { useEffect, useRef } from 'react'
import Button from '@/app/components/Sidebar/Button'
import About from '@/app/components/Sidebar/About'
import TOC from '@/app/components/Sidebar/TOC'

export default function Sidebar({
  about, bookmark, toc, selected, setSelected, onPageChange, pageNumber
}:{
  about: TypedObject
  bookmark: Bookmark[]
  toc: React.ReactNode
  selected: string
  setSelected: any
  onPageChange: any
  pageNumber: number
}) {
  const SidebarRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (SidebarRef.current && !SidebarRef.current.contains(event.target)) {
        setSelected('')
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })

  const translate = selected !== '' ? '' : '-translate-x-full'
  const covered = selected !== '' ? 'flex' : 'hidden'

  return(
    <>
    <div
      ref={SidebarRef}
      className={`sidebar fixed h-screen left-0 text-white transition duration-300 w-[40vw] z-10 ${translate}`}
    >
      <div className="absolute flex flex-col h-full justify-center left-[40vw]">
        <Button 
          title="About"
          value="about"
          color="bg-wrh-green"
          selected={selected}
          setSelected={setSelected}
        />
        <Button
          title="Table of Content"
          value="toc"
          color="bg-wrh-blue"
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <About 
        about={about} 
        selected={selected}
        setSelected={setSelected}
      />

      <TOC 
        toc={toc}
        bookmark={bookmark}
        selected={selected}
        setSelected={setSelected}
        onPageChange={onPageChange}
        pageNumber={pageNumber}
      />
    </div>
    <div className={`fixed bg-black opacity-30 transition h-full w-full ${covered}`}></div>
    </>
  )
}