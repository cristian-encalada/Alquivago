import { useState } from "react";

export default function TypeButton({ filters, setFilters }) {
  const [visible, setVisible] = useState('invisible')
  
  const handleClick = (e) => {
    const value = e.target.value;
    console.log(filters.includes(value))
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
        setFilters([...filters, value]);
      }
    }

  return (
    <div className="flex flex-col w-1/6 gap-1 h-20" onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('invisible')}>
      <button className="rounded-md font-medium text-lg w-full bg-white shadow py-2 hover:bg-slate-200 transition">Tipo</button>
      <div className={`${visible} flex flex-col w-full border-2 border-slate-300 rounded-lg bg-white shadow-lg`}>
        <ul className="overflow-auto h-32 flex flex-col items-center">
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5"  type="checkbox" id="apartamento" value="tipos=0" onChange={handleClick} checked={filters.includes('tipos=0')}/>
            <label htmlFor="apartamento">Apartamento</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5" type="checkbox" value="tipos=4" id='casa' onChange={handleClick} checked={filters.includes('tipos=4')}/>
            <label htmlFor="casa">Casa</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5"  type="checkbox" id='local' value="tipos=2" onChange={handleClick} checked={filters.includes('tipos=2')}/>
            <label htmlFor="local">Local</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5" id="oficina" type="checkbox" value="tipos=3" onChange={handleClick} checked={filters.includes('tipos=3')}/>
            <label htmlFor="oficina">Oficina</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5" id='terreno' type="checkbox" value="tipos=5" onChange={handleClick} checked={filters.includes('tipos=5')}/>
            <label htmlFor="terreno">Terreno</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5" id='garage' type="checkbox" value="tipos=7" onChange={handleClick} checked={filters.includes('tipos=7')}/>
            <label htmlFor="garage">Garage</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5" id='campo' type="checkbox" value="tipos=6" onChange={handleClick} checked={filters.includes('tipos=6')}/>
            <label htmlFor="campo">Campo</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition w-full">
            <input  className="w-5" id='otros' type="checkbox" value="tipos=9" onChange={handleClick} checked={filters.includes('tipos=9')}/>
            <label htmlFor="otros">Otros</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
