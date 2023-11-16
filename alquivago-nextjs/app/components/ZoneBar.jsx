'use client'
import { useState } from "react"
import { data } from "./data"
import { useRouter } from "next/navigation";
import closeIcon from '../../public/closeIcon.svg'
import Image from "next/image";

export default function ZoneBar({ filters, setFilters}) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(data.zonas);
  const [visible, setVisible] = useState('hidden')
  function handleVisibility() {
    if (visible === 'hidden') {
      setVisible('flex')
    } else setVisible('hidden')
  }
  const handleClick = (e) => {
    handleVisibility()
    const value = e.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
        setFilters([...filters, value]);
      }
    }
  
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const results = data.zonas.filter(
      (zona) => zona.zona.toLowerCase().includes(value)
    );

    setSearchResults(results);
  };


  return (
    <>
    <button className='lg:w-2/6 lg:h-12 m-auto rounded-2xl lg:rounded-lg bg-azul-500 shadow-2xl hover:scale-110 transition font-medium container h-20 text-azul-50' onClick={handleVisibility}>Buscar por zona</button>
    <section className={`fixed ${visible} transition-transform justify-start gap-2 flex-col items-center inset-0 md:w-2/3 w-full md:h-[85vh] h-screen m-auto bg-azul-200 overflow-x-hidden overflow-y-auto bg-opacity-90 rounded-lg shadow-2xl z-50`}>
      <Image src={closeIcon} alt="close icon" className="absolute top-2 right-2 hover:scale-125 transition w-10 h-10" onClick={handleVisibility}></Image>
      <input type="text" placeholder="buscar por zona" value={searchTerm} onChange={handleSearch}
       className="w-2/3 h-[10%] rounded-md text-center text-slate-500"/>
      <ul className="w-full h-[90%] items-center flex flex-wrap">
        {searchResults.map((zona) => (
          <>
          <li key={zona.id} className="flex border-2 h-[8%] items-center bg-azul-50 text-azul-500 font-medium w-full text-center rounded-md hover:scale-110 transition hover:bg-azul-50"><button className="focus:ring-2 h-full w-full rounded-md"
           value={`zonas=${zona.id}`} onClick={handleClick}>{zona.zona}</button></li>
           </>
        ))}
      </ul>
    </section>
    </>
  )
}