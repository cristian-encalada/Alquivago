import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function TypeButton({ filters, setFilters }) {
  const [visible, setVisible] = useState('hidden')
  const router = useRouter();
  const pathName = usePathname();

  function checkingValue(filterType, valueToCheck) {
    for (const element of filters) {
      if (element.startsWith(filterType)) {
        if (element.includes(valueToCheck)) {
          return true
        }
        return false
      }
    }
  }

  function handleVisibility() {
    if (visible === 'hidden') {
      setVisible('flex')
    } else setVisible('hidden')
  }
  const handleClick = (e) => {
    const tempFilters = []
    const value = e.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
      const hasVivienda = filters.find((filter) => filter.startsWith('tipos='));
  
      if (hasVivienda) {
        const existingValues = hasVivienda.split('=')[1].split(',');
        if (!existingValues.includes(value.split('=')[1])) {
          const updatedFilter = `tipos=${existingValues.join(',')},${value.split('=')[1]}`;
          setFilters(filters.map((filter) => (filter.startsWith('tipos=') ? updatedFilter : filter)));
        }
      } else {
        setFilters([...filters, value]);
      }
    }
  };
  
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
      <button className="rounded-md font-medium text-lg w-full bg-white shadow py-2 hover:bg-slate-200 transition" onClick={handleVisibility}>Tipo</button>
      <div className={`${visible} flex flex-col w-full border-2 border-slate-300 rounded-lg bg-white shadow-lg`}>
        <ul>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" type="checkbox" value="tipos=4" onClick={handleClick}/>
            Casa
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input  className="mx-2 w-8"  type="checkbox" value="tipos=0" onClick={handleClick}/>
            Apartamento
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input   className="mx-2 w-8" type="checkbox" value="tipos=2" onClick={handleClick}/>
            Local
          </li>
        </ul>
        <button className="bg-[#CDBC82] rounded-xl py-3 hover:scale-110 transition text-white text-lg font-medium" onClick={applyFilters}>Aplicar filtros</button>
      </div>
    </div>
  );
}
