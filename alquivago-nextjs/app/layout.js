import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Bookmark from '../public/Bookmark.svg'
import Image from 'next/image'
import Link from 'next/link'

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
      <body className=" bg-slate-100">
        <div className='sticky inset-y-0 bg-white border-2 z-50 w-10 rounded aspect-square flex justify-center items-center'><Link href='/comparisons'><Image src={Bookmark} alt='save icon'/></Link></div>
        <Header/>
        {children}
      </body>
    </html>
  )
}
