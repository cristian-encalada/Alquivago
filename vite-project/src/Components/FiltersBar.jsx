function FiltersBar() {
  return (
      <><h1 className="relative top-40 hidden font-semibold lg:block lg:text-center lg:text-8xl lg:text-white">Tu alquiler mas adecuado</h1><h1 className="relative bottom-12 text-5xl font-medium text-white lg:hidden">Buscar zona</h1><section className="flex h-3/6 w-2/3 flex-col justify-evenly lg:hidden">
      <input type="search" className="text-dorado-400 h-1/5 w-full rounded-2xl text-center text-3xl font-normal" placeholder="Ejemplo: Pocitos" />
      <button className="bg-dorado-300 round h-1/5 rounded-full text-3xl font-medium text-white">Filtrar</button>
      <button className="bg-dorado-300 round h-1/5 rounded-full text-3xl font-medium text-white">Buscar</button>
    </section><div type="search" className="lg:relative lg:mt-60 lg:flex lg:h-20 lg:w-2/3 lg:items-center lg:rounded-full lg:bg-white">
        <input type="search" className="hidden lg:block lg:h-full lg:w-5/6 lg:rounded-full lg:text-lg" />
        <button className="lg:bg-dorado-300 hidden lg:mr-5 lg:block lg:h-4/5 lg:w-1/6 lg:rounded-full lg:text-2xl lg:font-semibold lg:text-white">Buscar</button>
      </div></>
  )
}

export default FiltersBar