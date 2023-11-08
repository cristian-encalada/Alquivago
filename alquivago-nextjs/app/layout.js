import { Inter } from 'next/font/google'
import './globals.css'
import { Header} from './components/Header'
import Link from 'next/navigation'
import Image from 'next/image'
import Bookmark from '../public/Bookmark.svg'
import Navbar from './components/Nav'

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
    <html lang="es">
      <body className=" bg-azul-200">
        <Navbar/>
        <Header/>
        {children}
      </body>
    </html>
  )
}
