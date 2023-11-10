'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function Navbar() {
  const router = useRouter()
  return (
    <nav className="bg-azul-200 lg:bg-opacity-70 relative lg:sticky top-0 z-50 rounded-b-md flex h-16 w-full items-center justify-center lg:items-center lg:h-12 lg:w-full lg:justify-around lg:bg-azul-200">
      <div className='lg:absolute lg:left-0 flex justify-center lg:items-end lg:ml-16 text-center'>
        <Link href='/'>
          <h1 className="text-[#1491D2] text-2xl font-medium lg:mb-3 lg:block">alqui</h1>
          </Link>
          <h1 className="text-[#FB9E14] text-2xl font-medium lg:mb-3 lg:block">va</h1>
          <h1 className="text-[#E3403D] text-2xl font-medium lg:mb-3 lg:block">go</h1>
      </div>
    <ul className='hidden lg:flex lg:absolute lg:right-10 gap-10 items-center'>
      <li className="font-medium text-lg text-azul-800 hover:scale-110 hover:text-dorado-200 transition"><Link href='/publish'>Alquiler</Link></li>
      <li className="font-medium text-lg text-azul-800 hover:scale-110 hover:text-dorado-200 transition"><Link href='/map'>Mapa</Link></li>
      <li className="font-medium text-lg text-azul-800 hover:scale-110 hover:text-dorado-200 transition cursor-pointer" onClick={() => {
        if (!localStorage.arrData) {
          alert('No has seleccionado propiedades')
        } else {
          return router.push('/comparisons')
        }
      }}>Comparar</li>
    </ul>
  </nav>
  )
}