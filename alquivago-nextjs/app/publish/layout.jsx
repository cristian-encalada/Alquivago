'use client'
import ApplyFilters from "../components/ApplyFilters"
import Link from "next/link"
import Bookmark from '../../public/Bookmark.svg'
import Image from "next/image"
export default function PublishLayout({ children, params }) {
  return (
    <>
    <div className='md:hidden sticky inset-y-0 bg-white border-2 z-40 w-10 rounded aspect-square flex justify-center items-center'><Link href='/comparisons'><Image src={Bookmark} alt='save icon'/></Link></div>
    {children}
    </>
  )
} 