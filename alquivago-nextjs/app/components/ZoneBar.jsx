'use client'
import { useState } from "react"
import { data } from "./data"
import { useRouter, usePathname } from "next/navigation";

export default function ZoneBar() {
  const [selectedZones, setSelectedZones] = useState([])
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

    if (selectedZones.includes(value)) {
      // Si ya está seleccionada, quítala del array
      const updatedZones = selectedZones.filter((zone) => zone !== value);
      setSelectedZones(updatedZones);
    } else {
      // Si no está seleccionada, agrégala al array de zonas seleccionadas
      const updatedZones = [...selectedZones, value];
      setSelectedZones(updatedZones);
    }
    setSelectedZones((prevData) => {
      if (pathName === '/') {
        router.push(`/publish/zonas=${prevData.join(',')}`)
      }
      else if (pathName === '/publish') {
        router.push(`${pathName}/zonas=${prevData.join(',')}`)
      } else {
          if (pathName.includes('zonas=')) {
            router.push(`${pathName.split('zonas=')[0]}zonas=${prevData.join(',')}`)
          } else
          router.push(`${pathName.split('_')[0]}_zonas=${prevData.join(',')}`)
      }
      return prevData
    })
  }
  return (
    <>
    <button className='lg:w-2/6 lg:h-12 m-auto rounded-2xl lg:rounded-lg bg-azul-500 shadow-2xl hover:scale-110 transition font-medium container h-20 text-azul-50' onClick={handleVisibility}>Buscar por zona</button>
    <section className={`fixed ${visible} transition-transform justify-start gap-2 flex-col items-center inset-0 md:w-2/3 w-full md:h-[85vh] h-screen m-auto bg-azul-200 overflow-auto bg-opacity-90 rounded-lg shadow-2xl z-50`}>
      <span className="absolute top-2 right-2" onClick={handleVisibility}>Cerrar</span>
      <input type="text" placeholder="buscar por zona" value={searchTerm} onChange={handleSearch}
       className="w-2/3 h-[10%] rounded-md text-center text-slate-500"/>
      <ul className="w-2/6 h-[90%] items-center flex flex-wrap">
        {searchResults.map((zona) => (
          <li key={zona.id} className="border-2 h-[8%] flex items-center bg-azul-50 text-azul-500 font-medium w-full text-center rounded-md hover:scale-110 transition hover:bg-azul-50"><button className="focus:ring-2 w-full rounded-md"
           value={zona.id} onClick={handleSelect}>{zona.zona}  </button></li>
        ))}
      </ul>
    </section>
    </>
  )
}