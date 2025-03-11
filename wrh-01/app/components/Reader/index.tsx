'use client'
import { useState } from 'react'
import type { PageLayout } from '@react-pdf-viewer/core'
import { Icon, Viewer, SpecialZoomLevel, ViewMode, ProgressBar } from '@react-pdf-viewer/core'

import { pageNavigationPlugin, RenderGoToPageProps } from '@react-pdf-viewer/page-navigation'

import type { RenderBookmarkItemProps } from '@react-pdf-viewer/bookmark'
import { bookmarkPlugin } from '@react-pdf-viewer/bookmark'

import disableScrollPlugin from '@/lib/disableScrollPlugin'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css'

import NextButton from '@/app/components/NextButton'
import Sidebar from '@/app/components/Sidebar'

const ExpandIcon = () => (
  <Icon size={16}>
      <path d="M.541,5.627,11.666,18.2a.5.5,0,0,0,.749,0L23.541,5.627" />
  </Icon>
);

const CollapseIcon = () => (
  <Icon size={16}>
      <path d="M5.651,23.5,18.227,12.374a.5.5,0,0,0,0-.748L5.651.5" />
  </Icon>
);

export default function Reader({
  file, info
}:{
  file: string
  info: React.ReactNode
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
            {renderProps.defaultRenderToggle(<ExpandIcon />, <CollapseIcon />)}
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

  // const openLinksPlugin = (): Plugin => {
  //   const findLinks = (e: PluginOnAnnotationLayerRender) => {
  //     // Find links
  //   }

  //   return {
  //     onAnnotationLayerRender: findLinks,
  //   }
  // }

  return(
    <div className="relative flex justify-center">
      <div className="h-screen w-[80vw] overflow-hidden">
        <Viewer 
          fileUrl={file}
          pageLayout={pageLayout}
          plugins={[bookmarkPluginInstance, disableScrollPluginInstance, pageNavigationPluginInstance]}
          defaultScale={SpecialZoomLevel.PageFit}
          viewMode={ViewMode.DualPage}
          renderLoader={renderLoader}
        />
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