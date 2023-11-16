import { useState } from "react";

export default function Bathbutton({ filters, setFilters }) {
  const [visible, setVisible] = useState('invisible')
  
  const handleClick = (e) => {
    const value = e.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter((filter) => filter !== value));
    } else {
        setFilters([...filters, value]);
      }
    }

  return (
    <div className="flex flex-col gap-1 w-1/6 h-20" onMouseEnter={() => setVisible('visible')} onMouseLeave={() => setVisible('invisible')}>
      <button className="font-medium text-lg bg-white rounded-md shadow py-2 hover:bg-slate-200 transition">Baños</button>
      <div className={`${visible} flex flex-col w-full border-2 border-slate-300 rounded-lg bg-white shadow-lg`}>
        <ul>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" id='1baño' type="checkbox" value="baños=1" onChange={handleClick} checked={filters.includes('baños=1')}/>
            <label htmlFor="1baño">1 Baño</label>
          </li>
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" id="2baños" type="checkbox" value="baños=2" onChange={handleClick} checked={filters.includes('baños=2')}/>
            <label htmlFor="2baños" className="w-full">2 Baños</label>
          </li> 
          <li className="py-2 text-lg font-medium hover:bg-slate-200 rounded-lg transition">
            <input className="mx-2 w-8" id="3baños" type="checkbox" value="baños=3" onChange={handleClick} checked={filters.includes('baños=3')} />
            <label htmlFor="3baños">2+ Baños</label>
          </li>
        </ul>
      </div>
    </div>
  );
}
