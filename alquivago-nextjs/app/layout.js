import './globals.css'
import { Header} from './components/Header'
import Link from 'next/navigation'
import Image from 'next/image'
import Navbar from './components/Nav'
import OrderingSection from './components/SortingSection'
import mapIcon from '../public/mapIcon.svg'

export const metadata = {
  title: 'Alquivago',
  description: 'Alquila con nosotros',
}
const pages = [
  {label: 'Secundaria',
  link: '/publish',
  },
  {
    label: 'Principal',
    link: '/'
  }
]
export default function RootLayout({ children }) {
  return (
    <html lang="es" className='text-azul-500 bg-azul-50'>
      <head>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body className=" bg-azul-200">
        <Navbar/>
        <Header/>
        <OrderingSection/>
        {children}
      </body>
    </html>
  )
}
