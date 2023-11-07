'use client'
export default function MapPage() {
  return (
    <section className="container flex justify-center items-center">
    <iframe src="https://google-maps-alpha.vercel.app/" title="Mapa de zonas" width={900} height={550}/>
    </section>
  )
}