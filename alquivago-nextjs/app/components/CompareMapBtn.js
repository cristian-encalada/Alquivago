'use client'
import Link from "next/navigation"
import Image from "next/image"
import mapIcon from '../../public/mapIcon.svg'
export default function LayoutBtn() {
    return (
        <div className='md:hidden w-full sticky h-10 top-0 bg-white  dark:bg-white z-40 rounded aspect-square flex justify-around items-center'>
        <span className="w-1/2 flex justify-center border-2 h-full rounded-lg text-lg font-medium text-azul-600 animate-pulse items-center" onClick={() => {
          if (!localStorage.getItem('arrData')) {
            alert('No has seleccionado publicaciones para comparar')
          } else router.push('/comparisons')
        }}>
          Comparar</span>
        <Link href='/map' className="w-1/2 flex justify-center border-2 h-full rounded-lg"><Image src={mapIcon} alt='map icon' width={40} height={40} className="sticky top-0"/></Link>
        </div>
    )
}