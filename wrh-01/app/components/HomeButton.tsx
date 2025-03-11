import Link from 'next/link'

export default function HomeButton() {
  return(
    <Link href="/" className="absolute py-6 px-8 right-0 text-white top-0 z-10">
      <svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.33333 10.4H11.2667V26H4.33333V10.4Z" fill="#008F4F"/>
      <path d="M25.1333 10.4V13H4.33333V10.4H25.1333Z" fill="#008F4F"/>
      <path d="M14.7333 0L0 11.7H29.4667L14.7333 0Z" fill="#008F4F"/>
      <path d="M18.2 10.4H25.1333V26H18.2V10.4Z" fill="#008F4F"/>
      </svg>
    </Link>
  )
}