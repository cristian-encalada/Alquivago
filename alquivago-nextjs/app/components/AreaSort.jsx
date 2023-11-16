import { useState } from 'react'
export default function AreaOrder({ children, handleOrder}) {
    const [visibleState, setVisibleState] = useState('invisible')

    return (
      <div className="w-1/3 md:w-1/4 flex justify-center flex-col gap-1 text-azul-600" onMouseEnter={() => setVisibleState('visible')} onMouseLeave={() => setVisibleState('invisible')}>
      <button className="border-2 font-medium w-full rounded-lg  h-20 md:h-1/3 hover:bg-azul-300 hover:scale-105 transition hover:text-white">
        {children}
      </button>
      <div className={`h-2/3 w-full rounded-2xl shadow-2xl ${visibleState}`}>
        <div className="flex w-full h-1/2 items-center justify-center">
        <input type="radio" name="ordenArea" id="AreaAscendente" className="w-1/12" value='area:1' onChange={(e) => handleOrder(e, 'area')}/>
        <label htmlFor="AreaAscendente" className="w-5/6 hover:bg-azul-100 transition rounded-md">Ascendente</label>
        </div>
        <div className="flex w-full h-1/2 items-center justify-center">
        <input type="radio" name="ordenArea" id="AreaDescendente" className="w-1/12" value='area:-1' onChange={(e) => handleOrder(e, 'area')}/>
        <label htmlFor="AreaDescendente" className="w-5/6 hover:bg-azul-100 transition rounded-md">Descendente</label>
        </div>
      </div>
      </div>
    )
}
