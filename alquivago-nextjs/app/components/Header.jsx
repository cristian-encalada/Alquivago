import AlquiLogo from '../../public/alquilogo.svg'
import Image from 'next/image'
import Link from 'next/link'
import MobileFilter from './MobileFilter'
import Bookmark from '../../public/Bookmark.svg'
import ApplyFilters from './ApplyFilters'
import SearchBar from './SearchBar'
function Navbar() {
  return (
    <nav className=" bg-azul-200 absolute top-0 flex h-16 w-full items-center justify-center lg:items-center lg:h-16 lg:w-full lg:justify-around lg:bg-azul-200">
      <div className='lg:absolute lg:left-0 flex justify-center lg:items-end lg:ml-16 text-center'>
        <Link href='/'>
          <h1 className="text-[#1491D2] text-2xl font-medium lg:mb-3 lg:block">alqui</h1>
          </Link>
          <h1 className="text-[#FB9E14] text-2xl font-medium lg:mb-3 lg:block">va</h1>
          <h1 className="text-[#E3403D] text-2xl font-medium lg:mb-3 lg:block">go</h1>
      </div>
    <ul className='hidden lg:flex lg:absolute lg:right-10 gap-10 items-center'>
      <li className="font-medium text-lg text-azul-800 hover:scale-110 hover:text-dorado-600 transition"><Link href='/publish'>Alquiler</Link></li>
      <li className="font-medium text-lg text-azul-800 hover:scale-150 transition"><Link href='/comparisons'><Image src={Bookmark} alt='Icono de guardado'/></Link></li>
    </ul>
  </nav>
  )
}

function Header() {
  return (
    <header className="from-azul-200 gap-2 to-white flex h-screen flex-col items-center justify-center bg-opacity-60 bg-gradient-to-b bg-blend-multiply lg:flex lg:h-medio lg:w-full lg:flex-col lg:items-center lg:justify-center lg:bg-cover lg:bg-center">
      <Navbar/>
      <section className='md:flex w-full absolute hidden gap-5 lg:mt-44 justify-center'>
      <ApplyFilters />
      </section>
      <section className='flex flex-col w-4/6 gap-5'>
      <MobileFilter />
      </section>
    </header>
  )
}

export default Header;