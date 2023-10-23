import AlquiLogo from '../../public/alquilogo.svg'
import Image from 'next/image'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className="lg:border-dorado-300 bg-azul-700 border-b-dorado-300 absolute top-0 flex h-28 w-full items-center justify-center rounded-b-2xl border-b-2 lg:flex lg:h-24 lg:w-full lg:items-end lg:justify-start lg:border-b-2 lg:bg-transparent">
    <Image src={AlquiLogo} alt='Alquivago Logo' width={80} height={80}></Image>
    <h1 className="text-dorado-300 hidden text-2xl font-semibold lg:mb-3 lg:block">Alquivago</h1>
    <ul className='hidden lg:flex lg:relative'>
      <li><Link href='/publish'>Alquiler</Link></li>
    </ul>
  </nav>
  )
}

function Header() {
  return (
    <header className="from-azul-600 to-white lg:bg-azul-400 flex h-screen flex-col items-center justify-center bg-opacity-60 bg-gradient-to-b bg-blend-multiply lg:flex lg:h-screen lg:w-full lg:flex-col lg:items-center lg:justify-center lg:bg-[url('https://upload.wikimedia.org/wikipedia/commons/6/60/Atardecer_en_el_Palacio_Legislativo.jpg')] lg:bg-cover lg:bg-center">
      <Navbar/>
    </header>
  )
}

export default Header;