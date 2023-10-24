'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation"

useRouter
export default function CurrencyButton() {
  const router = useRouter()
  const pathName = usePathname()
  return (
    <div className="flex flex-col">
    <button className="border-2 font-medium text-lg">Moneda</button>
    <ul className="flex gap-1 border-2">
  <li>
    <input
      type="radio"
      name="moneda"
      value="USD"
      onClick={() => router.push(`/publish/moneda=USD`)}
    />
    USD
  </li>
  <li>
    <input
      type="radio"
      name="moneda"
      value="UYU"
      onClick={() => router.push('/publish/moneda=UYU')}
    />
    UYU
  </li>
</ul>

  </div>
  )
}