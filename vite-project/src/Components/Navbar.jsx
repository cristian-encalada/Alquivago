import AlquiLogo from '../assets/alquilogo.svg'
function Navbar() {
  return (
    <nav className="lg:border-dorado-300 bg-azul-700 border-b-dorado-300 absolute top-0 flex h-28 w-full items-center justify-center rounded-b-2xl border-b-2 lg:flex lg:h-24 lg:w-full lg:items-end lg:justify-start lg:border-b-2 lg:bg-transparent">
    <object data={AlquiLogo} type="image/svg+xml" className="w-20 h-20"></object>
    <h1 className="text-dorado-300 hidden text-2xl font-semibold lg:mb-3 lg:block">Alquivago</h1>
  </nav>
  )
}

export default Navbar;