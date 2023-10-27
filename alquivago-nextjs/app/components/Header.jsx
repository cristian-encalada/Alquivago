import AlquiLogo from '../../public/alquilogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import MobileFilter from './MobileFilter'
function Navbar() {
  return (
    <nav className=" bg-azul-200 absolute top-0 flex h-16 w-full items-center justify-center lg:flex lg:items-center lg:h-16 lg:w-full lg:justify-around lg:bg-azul-200">
      <div className='lg:absolute lg:left-0 lg:flex lg:items-end'>
          <Link href='/'><Image src={AlquiLogo} alt='Alquivago Logo' width={80} height={80}></Image></Link>
          <h1 className="text-dorado-300 hidden text-2xl font-semibold lg:mb-3 lg:block">Alquivago</h1>
      </div>
    <ul className='hidden lg:flex lg:absolute lg:right-6'>
      <li className="font-medium text-lg text-azul-800"><Link href='/publish'>Alquiler</Link></li>
    </ul>
  </nav>
  )
}

function Header() {
  return (
    <header className="from-azul-200 to-white flex h-screen flex-col items-center justify-center bg-opacity-60 bg-gradient-to-b bg-blend-multiply lg:flex lg:h-screen lg:w-full lg:flex-col lg:items-center lg:justify-center lg:bg-cover lg:bg-center">
      <Navbar/>
      <MobileFilter />
    </header>
  )
}

export default Header;