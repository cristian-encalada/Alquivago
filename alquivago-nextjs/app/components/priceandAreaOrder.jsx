'use client'
import { useState } from "react"
import mapIcon from '../../public/mapIcon.svg'
import listIcon from '../../public/listIcon.svg'
import Link from "next/link"
import Image from "next/image"
import PriceOrder from "./priceOrder"
import AreaOrder from "./AreaOrder"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"

export default function OrderingSection() {
  const [orders, setOrders] = useState([])
  const pathName = usePathname()
  const router = useRouter()

  function handleOrder(e, type) {
    const value = e.target.value;
    if (!orders.includes(value)) {
      let updatedOrders = orders.filter(order => !order.startsWith(type)); // Eliminar cualquier opción de precio existente
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
    <section className="hidden w-full h-24 gap-5 bg-white md:first-letter md:flex justify-center">
      <PriceOrder orders={orders} setOrders={setOrders} handleOrder={handleOrder}>Ordenar Precio</PriceOrder>
      <AreaOrder orders={orders} setOrders={setOrders} handleOrder={handleOrder}>Ordenar Área</AreaOrder>
        <ul className="flex gap-2 items-start">
          <li><Link href='/map'><Image src={mapIcon} className="w-8 h-8 hover:scale-125 transition" alt="map icon"/></Link> </li>
        </ul>
    </section>
  )
}