'use client'
import { useState } from "react"
import { data } from "./data"
import { useRouter, usePathname } from "next/navigation";

export default function ZoneBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState('hidden')
  const router = useRouter()
  const pathName = usePathname()
  function handleVisibility() {
    if (visible === 'hidden') {
      setVisible('flex')
    } else setVisible('hidden')
  }
  
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const results = data.zonas.filter(
      (zona) => zona.zona.toLowerCase().includes(value)
    );

    setSearchResults(results);
  };

  const handleSelect = (e) => {
    handleVisibility()
    const value = e.target.value
    console.log(pathName)
    if (pathName === '/') {
      return router.push(`${pathName}/publish/zonas=${value}`)
    }
    else if (pathName === '/publish') {
      return router.push(`${pathName}/zonas=${value}`)
    }
    return router.push(`${pathName}&zonas=${value}`)
  }
  return (
    <>
    <button className='w-2/6 h-12 border-2 m-auto rounded-lg bg-slate-50 shadow-lg hover:scale-110 transition font-medium' onClick={handleVisibility}>Buscar por zona</button>
    <section className={`fixed ${visible} transition-transform justify-start gap-2 flex-col items-center inset-0 w-2/3 h-[85vh] m-auto bg-azul-200 overflow-auto bg-opacity-90 rounded-lg shadow-2xl z-50`}>
      <span className="absolute top-2 right-2" onClick={handleVisibility}>Cerrar</span>
      <input type="text" placeholder="buscar por zona" value={searchTerm} onChange={handleSearch}
       className="w-2/3 h-16 rounded-md text-center"/>
      <ul className="w-2/6 justify-center flex flex-col gap-2">
        {searchResults.map((zona) => (
          <li key={zona.id} className="border-2 w-full text-center rounded-md hover:scale-110 transition hover:bg-azul-50"><button className="focus:ring-2 w-full rounded-md"
           value={zona.id} onClick={handleSelect}>{zona.zona}  </button></li>
        ))}
      </ul>
    </section>
    </>
  )
}