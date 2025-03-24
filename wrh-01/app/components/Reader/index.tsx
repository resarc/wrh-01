'use client'
import Panzoom from '@panzoom/panzoom'

import type { Bookmark } from '@/types'
import { useState, useEffect, useCallback, useRef } from 'react'

import { pdfjs, Document, Page, Outline } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

import { TypedObject } from '@portabletext/types'

import NextButton from '@/app/components/NextButton'
import ResetButton from '@/app/components/ResetButton'
import Sidebar from '@/app/components/Sidebar'
import Loader from '@/app/components/Loader'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function Reader({
  file, info, bookmark
}:{
  file: string
  info: TypedObject
  bookmark: Bookmark[]
}) {
  const currentRef = useRef<HTMLDivElement>(null)
  const zoomRef = useRef<HTMLDivElement>(null)
  const resetRef = useRef<HTMLDivElement>(null)

  const pageWrapperRef = useRef<HTMLDivElement>(null)
  const documentRef = useRef<HTMLDivElement>(null)

  const [ selected, setSelected ] = useState<string>('')
  const [ numPages, setNumPages ] = useState<number>(0)
  const [ pageNumber, setPageNumber ] = useState<number>(1)
  const [ spreadWidth, setSpreadWidth ] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      if (currentRef.current) {
        setSpreadWidth(currentRef.current.offsetWidth)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (zoomRef.current) {
      const element = zoomRef.current

      const preventDefaultZoom = (e: any) => {
        // Prevent default zoom behavior on iOS and touch devices
        if (e.touches.length > 1) {
          e.preventDefault()
        }
      }
      // Add event listener to prevent default pinch zoom
      element.addEventListener('touchstart', preventDefaultZoom, { passive: false });
      element.addEventListener('touchmove', preventDefaultZoom, { passive: false });

      // Cleanup on component unmount
      return () => {
        element.removeEventListener('touchstart', preventDefaultZoom);
        element.removeEventListener('touchmove', preventDefaultZoom);
        // panzoomInstance.dispose();
      }
    }
  }, [])

  useEffect(() => {
    if (zoomRef.current) {
      const element = zoomRef.current
      const panzoom = Panzoom(element, {
        maxScale: 3.5,
        minScale: 1,
        contain: 'outside',
      })
  
      if (resetRef.current && panzoom) {
        resetRef.current.addEventListener('click', panzoom.reset)
      }
    }
  }, [zoomRef.current])
  
  useEffect(() => {
    function handleGestureOutside(e: any) {
      if (zoomRef.current && !zoomRef.current.contains(e.target)) {
        e.preventDefault()
      }
    }
    
    // Bind the event listener
    document.addEventListener('wheel', handleGestureOutside)
    document.addEventListener('gesturestart', handleGestureOutside)

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('wheel', handleGestureOutside)
      document.removeEventListener('gesturestart', handleGestureOutside)
    }
  })

  // useEffect(() => {
  //   panzoom.getScale() > 1 && setIsZoomedOrPanned(true)
  //   console.log(isZoomedOrPanned)
  // }, [panzoom.getScale()])

  const renderPage = useCallback((pageNum: number) => {
    return (
      <Page
        key={pageNum}
        pageNumber={pageNum}
        width={700}
        loading={<div className="flex w-1/2"><Loader /></div>}
        className={`overflow-hidden ${pageNum === pageNumber ? 'left' : 'right'}`}
        scale={1.5}
      />
    )
  }, [pageNumber])
  
  const onDocumentLoadSuccess = (pdf: any): void  => {
    setNumPages(pdf.numPages)

    if (currentRef.current) {
      setSpreadWidth(currentRef.current.offsetWidth)
    }
  }

  const onPageChange = ( newPageNumber: number, direction : string ) => {
    if (newPageNumber !== pageNumber) {
      if (zoomRef.current) {
        zoomRef.current.style.transform = 'unset'
      }

      // setTransitioning(direction)

      if (pageWrapperRef.current ) {
        pageWrapperRef.current.style.transform = `translateX(-${(newPageNumber-1) * (spreadWidth/2)}px)`
      }

      setTimeout(() => {
        setPageNumber(newPageNumber)

        // setTransitioning('')
      }, 300)
    }
  }

  const onClickOutline = ({ 
    pageIndex, pageNumber
  } : {
    pageIndex: number
    pageNumber: number
  }) => {
    if (pageIndex !== pageNumber) {
      onPageChange(pageIndex, 'next')
      setSelected('')
    }
  }

  return(
    <div className="relative flex justify-center">
      {/* <div className="fixed hidden left-0 top-0 text-white z-50"> */}
      <div className="hidden fixed bg-black left-0 top-0 text-white z-50">
      </div>
      
      <div ref={currentRef} className="reader h-screen w-[82vw] flex items-center justify-center overflow-hidden overflow-x-auto z-10">
        <Document 
          file={file}
          inputRef={documentRef}
          onLoadSuccess={onDocumentLoadSuccess}
          // onItemClick={onClickOutline}
          loading={<Loader />}
          className="flex items-center justify-center h-full w-full overflow-hidden relative text-white"
        >
          <div ref={zoomRef} id="zoom-container" className="flex items-center h-full overflow-hidden relative transition">
          <div
            id="page-wrapper"
            ref={pageWrapperRef}
            className="page-wrapper flex items-center h-full relative transition"
            style={{ width: numPages*spreadWidth + 'px'}}
          >
            {Array.apply(null, Array(numPages))
              .map((x, i)=>i+1)
              .map((item, index) => (
                item >= pageNumber - 4 && item <= pageNumber + 5 &&
                <div
                  key={index}
                  className={`page-container overflow-hidden`}
                  // value={index * spreadWidth}
                  style={{ transform: 'translateX('+ (item-1) * spreadWidth/2 + 'px)' }}
                >
                  {renderPage(item)}
                </div>
              ))
            }
          </div>
          </div>

          {/* Outline */}
          <Sidebar
            about={info}
            bookmark={bookmark}
            toc={
              <Outline onItemClick={onClickOutline} />
            }
            selected={selected}
            setSelected={setSelected}
            onPageChange={onPageChange}
            pageNumber={pageNumber}
          />
        </Document>
      </div>

      {/* Controls */}
      <button 
        className="nav-button absolute flex h-screen items-center left-0 top-0 px-4 rotate-180" 
        onClick={() => { 
          onPageChange(pageNumber - 2, 'prev')
        }}
        disabled={pageNumber === 1}
      >
        <NextButton />
      </button>
      <button 
        className="nav-button absolute flex items-center h-screen right-0 top-0 px-4" 
        onClick={() => { 
          onPageChange(pageNumber + 2, 'next')
        } }
        disabled={pageNumber >= numPages}
      >
        <NextButton />
      </button>
      
      {/* / Control */}
    </div>
  )
}