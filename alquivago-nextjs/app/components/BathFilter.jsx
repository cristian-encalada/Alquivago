import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Bathbutton({ filters, setFilters }) {
  const [visible, setVisible] = useState('invisible')
  const router = useRouter();
  const pathName = usePathname();

  const handleClick = (e) => {
    const value = e.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
        setFilters([...filters, value]);
      }
    }
  function applyFilters() {
    if (filters.length === 0) {
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
      return router.push(`/publish/moneda=UYU&baños=${filters.join(',')}`)
    }
    else if (pathName.includes('moneda=USD')) {
      return router.push(`/publish/moneda=USD&baños=${filters.join(',')}`)
    }
    return router.push(`baños=${filters.join(',')}`)
  }

  return (
    <div className="flex flex-col gap-1 w-1/6" onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('invisible')}>
      <button className="font-medium text-lg bg-white rounded-md shadow py-2 hover:bg-slate-200 transition">Baños</button>
      <div className={`${visible} flex flex-col w-full border-2 border-slate-300 rounded-lg bg-white shadow-lg`}>
        <ul>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="baños=1" onChange={handleClick} checked={filters.includes('baños=1')}/>
            1 Baño
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="baños=2" onChange={handleClick} checked={filters.includes('baños=2')}/>
            2 baños
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="baños=3" onChange={handleClick} checked={filters.includes('baños=3')} />
            2+baños
          </li>
        </ul>
      </div>
    </div>
  );
}
