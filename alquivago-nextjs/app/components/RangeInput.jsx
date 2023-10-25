import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Bathbutton() {
  const [filters, setFilters] = useState([]);
  const router = useRouter();
  const pathName = usePathname();
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
    console.log(filters)
    if (filters.length === 0) {
      return router.push('/publish')
    }
    return router.push(`/publish/baños=${filters.join(',')}`)
  }

  return (
    <div className="flex flex-col w-32 gap-1">
      <button className="rounded-md font-medium text-lg w-full bg-white shadow-xl">Tipo</button>
      <div className="flex flex-col w-full border-2 border-slate-300 rounded-lg bg-white shadow-lg">
        <ul>
          <li>
            <input type="checkbox" value="1" onClick={handleClick} />
            1 Baño
          </li>
          <li>
            <input type="checkbox" value="2" onClick={handleClick}/>
            2 baños
          </li>
          <li>
            <input type="checkbox" value="3" onClick={handleClick} />
            2+baños
          </li>
        </ul>
        <button onClick={applyFilters}>Aplicar filtros</button>
      </div>
    </div>
  );
}
