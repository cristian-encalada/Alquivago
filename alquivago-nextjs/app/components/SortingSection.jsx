'use client'
import { useState } from "react"
import mapIcon from '../../public/mapIcon.svg'
import Link from "next/link"
import Image from "next/image"
import PriceOrder from "./PriceSort"
import AreaOrder from "./AreaSort"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export default function OrderingSection() {
  const [orders, setOrders] = useState([])
  const pathName = usePathname()
  const router = useRouter()

  function handleOrder(e, type) {
    const value = e.target.value;
    if (!orders.includes(value)) {
      let updatedOrders = orders.filter(order => !order.startsWith(type)); // Eliminar cualquier opción de precio/area existente
      setOrders([...updatedOrders, value]);
   } else {
      setOrders(orders.filter((order) => order != value))
   }
   setOrders((updatedOrders) => {
    if (pathName === '/publish') {
      return router.push(`${pathName}/-orden=${updatedOrders.join(',')}`);
    }
    else if (pathName === '/') {
      return router.push(`/publish/-orden=${updatedOrders.join(',')}`);
    }
    router.push(`${pathName.split('-')[0]}-orden=${updatedOrders.join(',')}`);
    return updatedOrders
  });
  }
  return (
    <>
    <section className="w-full h-24 gap-5 bg-white md:first-letter flex justify-around md:justify-center relative">
      <PriceOrder orders={orders} setOrders={setOrders} handleOrder={handleOrder}>Ordenar Precio</PriceOrder>
      <AreaOrder orders={orders} setOrders={setOrders} handleOrder={handleOrder}>Ordenar Área</AreaOrder>
        <ul className="hidden md:flex gap-2 items-start">
          <li><Link href='/map'><Image src={mapIcon} className="w-8 h-8 hover:scale-125 transition" alt="map icon"/></Link> </li>
        </ul>
    </section>
    <div className='md:hidden w-full sticky h-10 top-0 bg-white  dark:bg-white z-40 rounded aspect-square flex justify-around items-center'>
      <span className="w-1/2 cursor-pointer flex justify-center border-2 h-full rounded-lg text-lg font-medium text-azul-600 animate-pulse items-center" onClick={() => {
        if (!localStorage.getItem('arrData')) {
          alert('No has seleccionado publicaciones para comparar')
        } else router.push('/comparisons')
      }}>
        Comparar</span>
      <Link href='/map' className="w-1/2 flex justify-center border-2 h-full rounded-lg"><Image src={mapIcon} alt='map icon' width={40} height={40} className="sticky top-0"/></Link>
      </div>
    </>
  )
}
