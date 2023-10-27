import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function TypeButton() {
  const [filters, setFilters] = useState([]);
  const [visible, setVisible] = useState('hidden')
  const router = useRouter();
  const pathName = usePathname();
  function handleVisibility() {
    if (visible === 'hidden') {
      setVisible('flex')
    } else setVisible('hidden')
  }
  function handleClick(e) {
    const value = e.target.value;
    if (filters.includes(value)) {
      // Si el valor ya está en los filtros, lo eliminamos
      setFilters(filters.filter(item => item !== value));
    } else {
      // Si el valor no está en los filtros, lo añadimos
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
      return router.push(`/publish/moneda=UYU&tipos=${filters.join(',')}`)
    }
    else if (pathName.includes('moneda=USD')) {
      return router.push(`/publish/moneda=USD&tipos=${filters.join(',')}`)
    }
    if (pathName.includes('tipos') && !pathName.includes('moneda')) {
      return router.push(`tipos=${filters.join(',')}`)
    }
  }

  return (
    <div className="flex flex-col w-1/6 gap-1">
      <button className="rounded-md font-medium text-lg w-full bg-white shadow-xl py-2 hover:bg-slate-200 transition" onClick={handleVisibility}>Tipo</button>
      <div className={`${visible} flex flex-col w-full border-2 border-slate-300 rounded-lg bg-white shadow-lg`}>
        <ul>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="4" onChange={handleClick} checked={filters.includes('4')}/>
            Casa
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input  className="mx-2 w-8"  type="checkbox" value="0" onChange={handleClick} checked={filters.includes('0')}/>
            Apartamento
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input   className="mx-2 w-8" type="checkbox" value="2" onChange={handleClick} checked={filters.includes('2')}/>
            Local
          </li>
        </ul>
        <button className="bg-[#CDBC82] rounded-xl py-3 hover:scale-110 transition text-white text-lg font-medium" onClick={applyFilters}>Aplicar filtros</button>
      </div>
    </div>
  );
}
