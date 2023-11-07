'use client'
import { usePathname, useRouter} from "next/navigation"
import { useState } from "react"
import mapIcon from '../../public/mapIcon.svg'
import listIcon from '../../public/listIcon.svg'
import Link from "next/link"
import Image from "next/image"

function OrderPrice({ children }) {
  const [visibleState, setVisibleState] = useState('invisible')
  const pathName = usePathname()
  const router = useRouter()

  function handleOrder(e) {
    const value = e.target.value;
    const params = new URLSearchParams(pathName.split('?')[1]);
    if (pathName === '/publish') {
      return router.replace(`${pathName}/-orden=${value}`);
    }
   
    if (params.has('orden')) {
      params.set('orden', value);
    } else {
      params.append('orden', value);
    }
   
    router.replace(`${pathName.split('-')[0]}-${params}`);
   }
  function handleVisibility() {
    if (visibleState === 'invisible') {
      setVisibleState('visible')
    } else setVisibleState('invisible')
  }
  return (
    <div className="w-1/6 flex justify-center flex-col gap-1">
    <button className="border-2 w-full rounded-lg h-1/3 hover:bg-slate-400 transition hover:text-white" onClick={handleVisibility}>
      {children}
    </button>
    <div className={`h-2/3 w-full border-2 ${visibleState}`}>
      <ul className="flex flex-col items-center justify-center h-full">
        <li><input type="radio" name="ordenPrice" value='price:1' onClick={handleOrder}/>Ascendente</li>
        <li><input type="radio" name="ordenPrice" value='price:-1' onClick={handleOrder} />Descendente</li>
      </ul>
    </div>
    </div>
  )
}


function OrderArea({ children }) {
  const [visibleState, setVisibleState] = useState('invisible')
  const pathName = usePathname()
  const router = useRouter()
  function handleVisibility() {
    if (visibleState === 'invisible') {
      setVisibleState('visible')
    } else setVisibleState('invisible')
  }

  function handleOrder(e) {
    const value = e.target.value;
    const params = new URLSearchParams(pathName.split('?')[1]);
    if (pathName === '/publish') {
      return router.replace(`${pathName}/-orden=${value}`);
    }
   
    if (params.has('orden')) {
      params.set('orden', value);
    } else {
      params.append('orden', value);
    }
   
    router.replace(`${pathName.split('-')[0]}-${params}`);
   }
  return (
    <div className="w-1/6 flex justify-center flex-col gap-1">
    <button className="border-2 w-full rounded-lg h-1/3 hover:bg-slate-400 transition hover:text-white" onClick={handleVisibility}>
      {children}
    </button>
    <div className={`h-2/3 w-full border-2 ${visibleState}`}>
      <ul className="flex flex-col items-center justify-center h-full">
        <li><input type="radio" name="Area" value='area:1' onClick={handleOrder}/>Ascendente</li>
        <li><input type="radio" name="Area" value='area:-1' onClick={handleOrder}/>Descendente</li>
      </ul>
    </div>
    </div>
  )
}

export default function OrderingSection() {
  const router = useRouter()
  return (
    <section className="hidden w-full h-24 gap-2 bg-white md:first-letter md:flex justify-start">
      <OrderPrice>Ordenar Precio</OrderPrice>
      <OrderArea>Ordenar Área</OrderArea>
        <ul className="flex gap-2 items-start absolute right-2">
          <li><Link href='/map'><Image src={mapIcon} className="w-10 h-10 hover:scale-125 transition" alt="map icon"/></Link> </li>
          <li><Link href='/publish'><Image src={listIcon} className="w-8 h-8 hover:scale-125 transition" alt="map icon"/></Link> </li>
        </ul>
    </section>
  )
}