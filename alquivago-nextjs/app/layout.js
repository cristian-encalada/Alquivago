import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

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
      <body className=" bg-white dark:bg-white">
        <Header/>
        {children}
      </body>
    </html>
  )
}
