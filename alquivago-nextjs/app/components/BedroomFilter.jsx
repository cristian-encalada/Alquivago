import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Bathbutton() {
  const [visible, setVisible] = useState('hidden')
  const [filters, setFilters] = useState([]);
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
      return router.push(`/publish/moneda=UYU&dormitorios=${filters.join(',')}`)
    }
    else if (pathName.includes('moneda=USD')) {
      return router.push(`/publish/moneda=USD&dormitorios=${filters.join(',')}`)
    }
    return router.push(`dormitorios=${filters.join(',')}`)
  }

  return (
    <div className="flex flex-col gap-1 w-1/6">
      <button className="font-medium text-lg bg-white rounded-md shadow py-2 hover:bg-slate-200 transition" onClick={handleVisibility}>Dormitorios</button>
      <div className={`${visible} flex flex-col w-full border-2 border-slate-300 rounded-lg bg-white shadow-lg`}>
        <ul>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="1" onClick={handleClick} />
            1 Dormitorio
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="2" onClick={handleClick}/>
            2 Dormitorios 
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="3" onClick={handleClick} />
            3 Dormitorios
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="4" onClick={handleClick} />
            3+ Dormitorios
          </li>
        </ul>
        <button className="bg-[#CDBC82] rounded-xl hover:scale-110 transition py-3 text-white text-lg font-medium" onClick={applyFilters}>Aplicar filtros</button>
      </div>
    </div>
  );
}
