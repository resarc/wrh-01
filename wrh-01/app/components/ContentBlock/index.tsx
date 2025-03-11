import { PortableText } from '@portabletext/react'
import GoogleMap from './GoogleMap'
import Image_ from './Image_'

const ContentBlock = ({
  data
}: {
  data: any
}) => {
  const components = {
    types: {
      image: ({ value }: any) => <Image_ value={value} />,
      googleMap: ({ value }: any) => <GoogleMap url={value.url} />
    },
    block: {
      normal: ({ children }: any) => {
        if (children == '') {
          return <p className="my-3"></p>
        } else {
          return <p className="my-0">{children}</p>
        }
      }
    },
    marks: {
      strong: ({ children }: any) => <span className="font-bold">{children}</span>,
      italic: ({ children }: any) => <span className="italic">{children}</span>,
      link: ({ value, children }: any) => {
        const { href } = value
        return (
        <a href={href} target="_blank" rel="noopener">{children}</a>
        )
      }
    },
  }

  return (
    <div className="content-block flex flex-col">
      <PortableText
        value={data}
        components={components}
      />
    </div>
  )
}

export default ContentBlock
