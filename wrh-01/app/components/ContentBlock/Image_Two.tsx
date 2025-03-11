'use client'
import { urlFor } from '@/lib/sanity/client'
import Image from 'next/image'

const imageLoader = ({src, quality}: any) => {
  return `${src}?q=${quality || 75}`
}

export default function Image_Two({ 
  value 
}: {
  value: {
		_key: string
		caption: string
  }
}) {
	return (
		<div className="flex flex-col gap-y-2">
      {/* <div className="aspect-[3/2] flex relative"> */}
      {value &&
      <>
			<div className="image-container">
        <Image
          fill
          loading="lazy"
          loader={imageLoader}
          alt="cover"
					src={urlFor(value).url()}
          className="absolute object-contain inset-0 h-full w-full"
        />
			</div>
      <span className="caption inline-block">{value.caption}</span>
      </>
      }
		</div>
	)
}

