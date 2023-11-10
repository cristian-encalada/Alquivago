'use client'
import goBack from '../../public/goBack.svg'
import Image from "next/image"
import { useRouter } from "next/navigation"
export default function MapLayout({ children }) {
  const router = useRouter()
  return (
    <>
    <div className='md:hidden sticky inset-y-0 bg-white border-2 z-50 w-10 rounded aspect-square flex justify-center items-center' onClick={() => router.back()}><Image src={goBack} alt='save icon'/></div>
    {children}
    </>
  )
}