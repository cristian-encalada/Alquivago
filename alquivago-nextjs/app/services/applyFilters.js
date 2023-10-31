'use client'
import { usePathname, useRouter } from "next/navigation"

export default function useFilters(filterSelection, filterType) {
  console.log(filterSelection, filterType)
  const router = useRouter()
  const pathName = usePathname()
  if (filterSelection.length === 0) {
    if (pathName.includes("moneda=UYU")) {
      return router.push('moneda=UYU')
    }
    else if (pathName.includes("moneda=USD")) {
      return router.push('moneda=USD')
    }
    else {
      return router.push('/publish')
  }
}
  if (pathName.includes('moneda=UYU')) {
    return router.push(`/publish/moneda=UYU&${filterType}=${filterSelection.join(',')}`)
    }
  else if (pathName.includes('moneda=USD')) {
  return router.push(`/publish/moneda=USD&${filterType}=${filterSelection.join(',')}`)
}
  return router.push(`/publish/&${filterType}=${filterSelection.join(',')}`)
}