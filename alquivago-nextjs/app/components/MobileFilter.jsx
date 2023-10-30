'use client'
import { flightRouterStateSchema } from "next/dist/server/app-render/types"
import { Router, useRouter } from "next/navigation"
import { useState } from "react"

export default function MobileFilter() {
  const router = useRouter()
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
    const value = e.currentTarget.getAttribute('data-value');
  
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
  

  const handleDormitoriosChange = (e) => {
    const value = e.target.value;
  
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
      // Comprobamos si el valor actual contiene 'dormitorios='
      const hasDormitorios = filters.find((filter) => filter.startsWith('dormitorios='));
  
      // Si ya hay un filtro de dormitorios presente
      if (hasDormitorios) {
        // Obtenemos los valores actuales
        const existingValues = hasDormitorios.split('=')[1].split(',');
  
        // Comprobamos si el valor ya existe en los valores actuales
        if (!existingValues.includes(value.split('=')[1])) {
          // Actualizamos la entrada en filters con el valor nuevo
          const updatedFilter = `dormitorios=${existingValues.join(',')},${value.split('=')[1]}`;
          setFilters(filters.map((filter) => (filter.startsWith('dormitorios=') ? updatedFilter : filter)));
        }
      } else {
        // Si no hay filtro de dormitorios presente, simplemente agregamos el nuevo filtro
        setFilters([...filters, value]);
      }
    }
  };

  const handleBaniosChange = (e) => {
    const value = e.target.value;
  
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
      const hasBanios = filters.find((filter) => filter.startsWith('baños='));
  
      if (hasBanios) {
        const existingValues = hasBanios.split('=')[1].split(',');
        if (!existingValues.includes(value.split('=')[1])) {
          const updatedFilter = `baños=${existingValues.join(',')},${value.split('=')[1]}`;
          setFilters(filters.map((filter) => (filter.startsWith('baños=') ? updatedFilter : filter)));
        }
      } else {
        setFilters([...filters, value]);
      }
    }
  };
  
  

  const handleApplyFilters = () => {
    // Aquí puedes usar el estado actualizado filters para realizar acciones con los filtros seleccionados
    console.log(filters.join('&'))
    return router.push(`/publish/${filters.join('&')}`)
  };

  return (
    <>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleVisibility}>Filtros</button>
    <section className={`md:hidden ${visible} fixed z-30 inset-0 m-auto h-screen w-full flex-col justify-center items-center bg-slate-200`}>
      <div className="absolute top-0 right-0" onClick={handleVisibility}>Cerrar</div>
    <div className={`flex-col items-center justify-center gap-2 text-center text-xl font-medium text-slate-600 w-full`}>
    <div className="h-0.5 w-full bg-slate-500"></div>
    <h1>Moneda</h1>
    <ul className="flex justify-around gap-5">
      <li><input type="radio" name='moneda' value="moneda=USD" className="mr-5" onChange={handleMonedaChange} checked={filters.includes('moneda=USD')}/>USD</li>
      <li><input type="radio" name="moneda" value="moneda=UYU" className="mr-5" onChange={handleMonedaChange} checked={filters.includes('moneda=UYU')}/>UYU</li>
    </ul>
    <div className="h-0.5 w-full bg-slate-500"></div>
    <h1>Tipos de vivienda</h1>
    <div className="w-full flex justify-center my-3" >
    <button type="button" className="flex w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2" data-value="tipos=0" onClick={handleTiposViviendaChange}>
      <span className="text-m inline-flex h-9 w-full items-center justify-center rounded-full border border-blue-300 bg-blue-300 font-bold leading-none text-blue-900 hover:border-blue-900 group-hover:border-blue-900">Apartamento</span>
    </button>
    <button type="button" className="flex w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2" data-value="tipos=4" onClick={handleTiposViviendaChange}>
      <span className="text-m inline-flex h-9 w-full items-center justify-center rounded-full border border-blue-300 bg-blue-300 font-bold leading-none text-blue-900 hover:border-blue-900 group-hover:border-blue-900">Casa</span>
    </button>
    <button type="button" className="flex w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2" data-value="tipos=2" onClick={handleTiposViviendaChange}>
      <span className="text-m inline-flex h-9 w-full items-center justify-center rounded-full border border-blue-300 bg-blue-300 font-bold leading-none text-blue-900 hover:border-blue-900 group-hover:border-blue-900">Local</span>
    </button>
    </div>
    <div className="flex h-0.5 w-full bg-slate-500"></div>
    <h1>Dormitorios</h1>
    <ul className="flex gap-4">
      <li><input type="checkbox" value="dormitorios=1" className="mr-2" onClick={handleDormitoriosChange} checked={filters.includes('dormitorios=1')} />1 Dormitorio</li>
      <li><input type="checkbox" value="dormitorios=2" className="mr-2" onClick={handleDormitoriosChange  } checked={filters.includes('dormitorios=2')} />2 Dormitorios</li>
      <li><input type="checkbox" value="dormitorios=3" className="mr-2" onClick={handleDormitoriosChange} />3 Dormitorios</li>
      <li><input type="checkbox" value="dormitorios=4" className="mr-2" onClick={handleDormitoriosChange} />3+ Dormitorios</li>
    </ul>
    <div className="flex h-0.5 w-full bg-slate-500"></div>
    <h1>Baños</h1>
    <ul className="flex gap-4">
      <li><input type="checkbox" value="baños=1" className="mr-2" onClick={handleBaniosChange}/>1 Baño</li>
      <li><input type="checkbox" value="baños=2" className="mr-2" onClick={handleBaniosChange}/>2 Baños</li>
      <li><input type="checkbox" value="baños=3" className="mr-2" onClick={handleBaniosChange}/>2+ Baños</li>
    </ul>
    <div className="h-0.5 w-full bg-slate-500"></div>
  <button type="button" className="mt-5 py-3 w-1/3 flex-grow rounded-full ring-blue-500 focus:outline-none focus:ring-2 bg-blue-300 text-center hover:scale-125 transition" onClick={handleApplyFilters}>Aplicar filtros</button>
  </div>
  <button onClick={() => setFilters([])}>Limpiar filtros</button>
</section>
</>
  )
}