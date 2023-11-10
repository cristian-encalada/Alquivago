'use client'
import Link from "next/link"
import Bookmark from '../../public/Bookmark.svg'
import mapIcon from '../../public/mapIcon.svg'
import Image from "next/image"
import OrderingSection from "../components/priceandAreaOrder"
export default function PublishLayout({ children, params }) {
  return (
    <>
    <div className='md:hidden w-full sticky h-10 top-0 bg-white  dark:bg-white z-40 rounded aspect-square flex justify-around items-center'>
      <Link href='/comparisons' className="w-1/2 flex justify-center border-2 h-full rounded-lg"><span className="text-center flex items-center font-medium text-lg text-azul-600">Comparar</span></Link>
      <Link href='/map' className="w-1/2 flex justify-center border-2 h-full rounded-lg"><Image src={mapIcon} alt='map icon' width={40} height={40} className="sticky top-0"/></Link>
      </div>
    {children}
    </>
  )
} 