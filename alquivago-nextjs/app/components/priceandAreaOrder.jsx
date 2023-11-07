'use client'
import { usePathname, useRouter} from "next/navigation"
import { useState } from "react"
import mapIcon from '../../public/mapIcon.svg'
import listIcon from '../../public/listIcon.svg'
import Link from "next/link"
import Image from "next/image"

function OrderPrice({ children, orders, setOrders }) {
  const [visibleState, setVisibleState] = useState('invisible')
  const pathName = usePathname()
  const router = useRouter()

  function handleOrder(e) {
    const value = e.target.value;
    console.log(orders, value)
    if (orders.includes(value)) {
      setOrders(orders.filter((order) => order != value))
    } else setOrders([value])
    console.log(orders)
    const params = new URLSearchParams(pathName.split('?')[1]);
    if (pathName === '/publish') {
      return router.replace(`${pathName}/-orden=${orders.join(',')}`);
    }
   
    if (params.has('orden')) {
      params.set('orden', orders.join(','));
    } else {
      params.append('orden', orders.join(','));
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
    <button className="border-2 font-medium w-full rounded-lg h-1/3 hover:bg-azul-300 hover:scale-105 transition hover:text-white" onClick={handleVisibility}>
      {children}
    </button>
    <div className={`h-2/3 w-full rounded-2xl shadow-2xl ${visibleState}`}>
    <div className="flex w-full h-1/2 items-center justify-center">
      <input type="radio" name="ordenPrecio" id="precioAscendente" className="w-1/12" value='price:1' onClick={handleOrder}/>
      <label htmlFor="precioAscendente" className="w-5/6 hover:bg-azul-100 transition rounded-md">Ascendente</label>
    </div> <div className="flex w-full h-1/2 items-center justify-center">
      <input type="radio" name="ordenPrecio" id="precioDescendente" className="w-1/12" value='price:-1' onClick={handleOrder}/>
      <label htmlFor="precioDescendente" className="w-5/6 hover:bg-azul-100 transition rounded-md">Ascendente</label>
    </div>
    </div>
    </div>
  )
}


function OrderArea({ children, orders, setOrders }) {
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
    if (orders.includes(value)) {
      setOrders(orders.filter((order) => order != value))
    } else setOrders(value)
    const params = new URLSearchParams(pathName.split('?')[1]);
    if (pathName === '/publish') {
      return router.replace(`${pathName}/-orden=${orders.join(',')}`);
    }
   
    if (params.has('orden')) {
      params.set('orden', orders.join(','));
    } else {
      params.append('orden', orders.join(','));
    }
   
    router.replace(`${pathName.split('-')[0]}-${params}`);
   }
  return (
    <div className="w-1/6 flex justify-center flex-col gap-1">
    <button className="border-2 font-medium w-full rounded-lg h-1/3 hover:bg-azul-300 hover:scale-105 transition hover:text-white" onClick={handleVisibility}>
      {children}
    </button>
    <div className={`h-2/3 w-full rounded-2xl shadow-2xl ${visibleState}`}>
      <div className="flex w-full h-1/2 items-center justify-center">
      <input type="radio" name="ordenArea" id="AreaAscendente" className="w-1/12" value='area:1' onClick={handleOrder}/>
      <label htmlFor="AreaAscendente" className="w-5/6 hover:bg-azul-100 transition rounded-md">Ascendente</label>
      </div>
      <div className="flex w-full h-1/2 items-center justify-center">
      <input type="radio" name="ordenArea" id="AreaDescendente" className="w-1/12" value='area:-1' onClick={handleOrder}/>
      <label htmlFor="AreaDescendente" className="w-5/6 hover:bg-azul-100 transition rounded-md">Descendente</label>
      </div>
    </div>
    </div>
  )
}

export default function OrderingSection() {
  const router = useRouter()
  const [orders, setOrders] = useState([])
  return (
    <section className="hidden w-full h-24 gap-2 bg-white md:first-letter md:flex justify-start">
      <OrderPrice orders={orders} setOrders={setOrders}>Ordenar Precio</OrderPrice>
      <OrderArea orders={orders} setOrders={setOrders}>Ordenar Área</OrderArea>
        <ul className="flex gap-2 items-start absolute right-2">
          <li><Link href='/map'><Image src={mapIcon} className="w-10 h-10 hover:scale-125 transition" alt="map icon"/></Link> </li>
          <li><Link href='/publish'><Image src={listIcon} className="w-8 h-8 hover:scale-125 transition" alt="map icon"/></Link> </li>
        </ul>
    </section>
  )
}