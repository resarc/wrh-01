'use client'
import { useState } from 'react'
import type { PageLayout } from '@react-pdf-viewer/core'
import { TypedObject } from '@portabletext/types'
import { Worker, Viewer, SpecialZoomLevel, ViewMode, ProgressBar, ScrollMode } from '@react-pdf-viewer/core'

import { pageNavigationPlugin, RenderGoToPageProps } from '@react-pdf-viewer/page-navigation'

import type { RenderBookmarkItemProps } from '@react-pdf-viewer/bookmark'
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark'

import disableScrollPlugin from '@/lib/disableScrollPlugin'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'

import NextButton from '@/app/components/NextButton'
import Sidebar from '@/app/components/Sidebar'

export default function Reader({
  file, info
}:{
  file: string
  info: TypedObject
}) {
  const [ selected, setSelected ] = useState<string>('')

  const pageNavigationPluginInstance = pageNavigationPlugin()
  const bookmarkPluginInstance = bookmarkPlugin()
  const disableScrollPluginInstance = disableScrollPlugin()

  const pageLayout: PageLayout = {
    transformSize: ({ size }) => ({
        height: screen.height,
        width: size.width,
    }),
  }

  // const { GoToFirstPage, GoToLastPage, GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance
  const { GoToNextPage, GoToPreviousPage } = pageNavigationPluginInstance

  const { Bookmarks } = bookmarkPluginInstance
  const toggleBookmark = () => {
    setSelected('')
  }

  const renderBookmarkItem = (renderProps: RenderBookmarkItemProps) => 
    renderProps.defaultRenderItem(
      renderProps.onClickItem,
      <>
        {renderProps.defaultRenderTitle(() => {
          renderProps.onClickTitle()
          toggleBookmark()
        })}
      </>
    );

  const renderLoader = (percentages: number) => (
    <div className="progress-bar" style={{ width: '240px' }}>
      <ProgressBar progress={Math.round(percentages)} />
    </div>
  )

  return(
    <div className="relative flex justify-center">
      <div className="reader h-screen w-[80vw] overflow-hidden overflow-x-auto">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

        <Viewer 
          fileUrl={file}
          pageLayout={pageLayout}
          plugins={[
            bookmarkPluginInstance, 
            // disableScrollPluginInstance, 
            pageNavigationPluginInstance
          ]}
          defaultScale={SpecialZoomLevel.PageFit}
          viewMode={ViewMode.DualPage}
          renderLoader={renderLoader}
          scrollMode={ScrollMode.Page}
          // renderViewer={(props) => (
          //   <div className="pdf-viewer-container">
          //     <div style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto' }}>
          //       {props.children}
          //     </div>
          //   </div>
          // )}
        />
        </Worker>
      </div>

      <Sidebar
        about={info}
        toc={
          <Bookmarks renderBookmarkItem={renderBookmarkItem} />
        }
        selected={selected}
        setSelected={setSelected}
      />

      <div className="absolute flex h-screen items-center left-0 top-0">
      <GoToPreviousPage>
      {
        (props: RenderGoToPageProps) => (
          <button
            style={{
              // backgroundColor: props.isDisabled ? '#ff0000' : 'transparent',
              border: 'none',
              cursor: props.isDisabled ? 'not-allowed' : 'pointer',
              height: 'fit-content',
              margin: '36px',
              visibility: props.isDisabled ? 'hidden' : 'visible',
              transform: 'rotate(180deg)',
              top: 0,
            }}
            // It will be disabled if the current page is the first page
            disabled={props.isDisabled}
            onClick={props.onClick}
          >
            <NextButton />
          </button>
        )
      }
      </GoToPreviousPage>
      </div>

      <div className="absolute flex items-center h-screen right-0 top-0">
      <GoToNextPage>
        {(props: RenderGoToPageProps) => (
          <button
            style={{
              // backgroundColor: props.isDisabled ? '#ff0000' : 'transparent',
              border: 'none',
              cursor: props.isDisabled ? 'not-allowed' : 'pointer',
              height: 'fit-content',
              margin: '36px',
              visibility: props.isDisabled ? 'hidden' : 'visible',
            }}
            disabled={props.isDisabled}
            onClick={props.onClick}
          >
            <NextButton />
          </button>
        )}
      </GoToNextPage>
      </div>

      {/* <div className="absolute flex items-center h-screen right-0 bottom-0">
      <GoToLastPage>
        {(props: RenderGoToPageProps) => (
          <button
            style={{
              backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
              border: 'none',
              cursor: props.isDisabled ? 'not-allowed' : 'pointer',
              height: 'fit-content',
              padding: '8px',
            }}
            disabled={props.isDisabled}
            onClick={props.onClick}
          >
            Last
          </button>
        )}
      </GoToLastPage>
      </div> */}
    </div>
  )
}