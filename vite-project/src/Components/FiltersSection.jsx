import { useState } from "react"

function PriceFilter() {
  const [visible, setVisible] = useState('hidden')

  function handleClick() {
    if (visible === 'flex') {
      setVisible('hidden');
    }
    else {
      setVisible('flex');
    }
  }
  return (
    <section className="flex h-full w-1/3 flex-col gap-1">
    <button onClick={handleClick} className="border-azul-200 h-1/6 w-full rounded-full border-2 text-2xl font-normal text-white"
        id="preciobtn">Precio</button>
        <div className={`h-1/3 w-full ${visible}`}>
          <ul className="text-azul-600 flex h-full w-full items-center justify-evenly text-lg font-medium">
            <li><input type="checkbox" name="" id="" />USD</li>
            <li><input type="checkbox" name="" id="" />UYU</li>
          </ul>
        </div>
        <div className={`h-1/3 w-full ${visible}`}>
          <ul className="flex h-full w-full gap-2">
            <li className="h-full w-1/2"><input type="text" name="" id="" placeholder="Minimo"
                className="text-azul-600 h-full w-full rounded-2xl text-center" /></li>
            <li className="h-full w-1/2"><input type="text" name="" id="" placeholder="Maximo"
                className="h-full w-full rounded-2xl text-center" /></li>
          </ul>
        </div>
        <div className={`mt-1 h-1/3 w-full items-center justify-center ${visible}`}>
          <button className="bg-azul-500 text-white font-bold py-2 px-4 rounded hover:scale-110 transition">
            Aplicar Rango
          </button>
        </div>
  </section>
  )
}

function SizeFilter() {
  const [visible, setVisible] = useState('hidden')

  function handleClick() {
    if (visible === 'flex') {
      setVisible('hidden');
    }
    else {
      setVisible('flex');
    }
  }
  return (
    <section className="flex h-full w-1/3 flex-col gap-1">
      <button onClick={handleClick} className="border-azul-200 h-1/6 w-full rounded-full border-2 text-2xl font-normal text-white"
            id="tamañobtn">Tamaño</button>
            <div id="tamaño-content" className={`bg-azul-100 ${visible} h-max w-full flex-col gap-0 rounded-3xl opacity-70 shadow-2xl`}>
            <h3 className="text-center text-lg font-medium mt-5">Dormitorios</h3>
            <ul className="w-full h-1/2 flex justify-evenly">
              <li><input type="checkbox" name="" id=""/>1</li>
              <li><input type="checkbox" name="" id=""/>2</li>
              <li><input type="checkbox" name="" id=""/>2+</li>
            </ul>
            <h3 className="text-center mt-1 text-lg font-medium">Dormitorios</h3>
            <ul className="w-full h-1/2 flex justify-evenly mb-5">
              <li><input type="checkbox" name="" id=""/>1</li>
              <li><input type="checkbox" name="" id=""/>2</li>
              <li><input type="checkbox" name="" id=""/>2+</li>
            </ul>
          </div> 
      </section>
  )
}

function TypeFilter() {
  const [visible, setVisible] = useState('hidden')

  function handleClick() {
    if (visible === 'flex') {
      setVisible('hidden');
    }
    else {
      setVisible('flex');
    }
  }
  return (
    <section className="flex h-full w-1/3 flex-col gap-1">
      <button onClick={handleClick} className="border-azul-200 h-1/6 w-full rounded-full border-2 text-2xl font-normal text-white"
            id="tipobtn">Tipo</button>
            <div id="tipo-content" className={`bg-azul-100 ${visible} h-max w-full flex-col gap-0 rounded-3xl opacity-70 shadow-2xl`}>
            <ul className="flex flex-col justify-center ml-6 gap-2 mb-3 mt-3">
              <li className="text-lg font-medium text-azul-700"><input type="checkbox"/>Casa</li>
              <li className="text-lg font-medium text-azul-700"><input type="checkbox"/>Apartamento</li>
              <li className="text-lg font-medium text-azul-700"><input type="checkbox"/>Local Comercial</li>
              <li className="text-lg font-medium text-azul-700"><input type="checkbox"/>Oficina</li>
              <li className="text-lg font-medium text-azul-700"><input type="checkbox"/>Terreno</li>
            </ul>
            </div>
      </section>
  )
}

function FiltersSection() {
  return (
    <div className="mt-2 hidden h-80 w-2/3 gap-1 lg:flex">
      <PriceFilter/>
      <SizeFilter/>
      <TypeFilter/>
    </div>
  )
}


export default FiltersSection;