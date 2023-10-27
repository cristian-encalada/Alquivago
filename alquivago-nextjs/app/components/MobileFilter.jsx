'use client'
import { useState } from "react"

export default function MobileFilter() {
  const [visible, setVisible] = useState('hidden')
  const [filters, setFilters] = useState([])
  function handleVisibility() {
    if (visible === 'hidden') {
      setVisible('flex')
    } else setVisible('hidden')
  }

  // Funciones para manejar los cambios en los filtros
  const handleMonedaChange = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.value]);
    } else {
      setFilters(filters.filter((filter) => filter !== e.target.value));
    }
  };

  const handleTiposViviendaChange = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.value]);
    } else {
      setFilters(filters.filter((filter) => filter !== e.target.value));
    }
  };

  const handleDormitoriosChange = (e) => {
    const value = e.target.value
    if (filters.includes(value)) {
        setFilters(filters.filter((filter) => filter !== value));
    }
    else {
      setFilters([...filters, value]);
    }
  };

  const handleBaniosChange = (e) => {
    if (e.target.checked) {
      setFilters([...filters, e.target.value]);
    } else {
      setFilters(filters.filter((filter) => filter !== e.target.value));
    }
  };

  const handleApplyFilters = () => {
    // Aquí puedes usar el estado actualizado filters para realizar acciones con los filtros seleccionados
    console.log('Filtros aplicados:', filters);
  };

  return (
    <>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleVisibility}>Filtros</button>
    <section className={`md:hidden ${visible} fixed inset-0 m-auto h-screen w-full flex-col justify-center items-center bg-slate-200`}>
      <div className="absolute top-0 right-0" onClick={handleVisibility}>Cerrar</div>
    <div className={`flex-col items-center justify-center gap-2 text-center text-xl font-medium text-slate-600 w-full`}>
    <div className="h-0.5 w-full bg-slate-500"></div>
    <h1>Moneda</h1>
    <ul className="flex justify-around gap-5">
      <li><input type="radio" value="USD" className="mr-5" onClick={handleDormitoriosChange}/>USD</li>
      <li><input type="radio" value="UYU" className="mr-5" onClick={handleDormitoriosChange}/>UYU</li>
    </ul>
    <div className="h-0.5 w-full bg-slate-500"></div>
    <h1>Tipos de vivienda</h1>
    <div className="w-full flex justify-center my-3" >
    <button type="button" className="flex w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2" value="0" onClick={(e) => console.log(e.target.value)}>
      <span className="text-m inline-flex h-9 w-full items-center justify-center rounded-full border border-blue-300 bg-blue-300 font-bold leading-none text-blue-900 hover:border-blue-900 group-hover:border-blue-900">Apartamento</span>
    </button>
    <button type="button" className="flex w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2" value="4">
      <span className="text-m inline-flex h-9 w-full items-center justify-center rounded-full border border-blue-300 bg-blue-300 font-bold leading-none text-blue-900 hover:border-blue-900 group-hover:border-blue-900">Casa</span>
    </button>
    <button type="button" className="flex w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2" value="2">
      <span className="text-m inline-flex h-9 w-full items-center justify-center rounded-full border border-blue-300 bg-blue-300 font-bold leading-none text-blue-900 hover:border-blue-900 group-hover:border-blue-900">Local</span>
    </button>
    </div>
    <div className="flex h-0.5 w-full bg-slate-500"></div>
    <h1>Dormitorios</h1>
    <ul className="flex gap-4">
      <li><input type="checkbox" value="dormitorios=1" className="mr-2" onClick={handleDormitoriosChange} />1 Dormitorio</li>
      <li><input type="checkbox" value="dormitorios=2" className="mr-2" onClick={handleDormitoriosChange  } />2 Dormitorios</li>
      <li><input type="checkbox" value="dormitorios=3" className="mr-2" onClick={handleDormitoriosChange} />3 Dormitorios</li>
      <li><input type="checkbox" value="dormitorios=4" className="mr-2" onClick={handleDormitoriosChange} />3+ Dormitorios</li>
    </ul>
    <div className="flex h-0.5 w-full bg-slate-500"></div>
    <h1>Baños</h1>
    <ul className="flex gap-4">
      <li><input type="checkbox" value="baños=1" className="mr-2" onClick={handleDormitoriosChange}/>1 Baño</li>
      <li><input type="checkbox" value="baños=2" className="mr-2" onClick={handleDormitoriosChange}/>2 Baños</li>
      <li><input type="checkbox" value="baños=3" className="mr-2" onClick={handleDormitoriosChange}/>2+ Baños</li>
    </ul>
    <div className="h-0.5 w-full bg-slate-500"></div>
  <button type="button" className="mt-5 py-3 w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2 bg-blue-300 text-center hover:scale-125 transition" onClick={handleApplyFilters}>Aplicar filtros</button>
  </div>
</section>
</>
  )
}