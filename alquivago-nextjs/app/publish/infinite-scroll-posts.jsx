'use client'
import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import getData from "./actions"
import Publish from "../components/Publish"

export default function InfiniteScroll ({firstPage, currencyFilter}) {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setposts] = useState(firstPage)
  const [page, setPage] = useState(1)
  const [ref, inView] = useInView()
  const [arrData, setArrData] = useState([])

  const guardarEnLocalStorage = (objeto) => {
    // Generar una clave única para el objeto (usando el ID como ejemplo)
    console.log(objeto);
    console.log(arrData.includes(objeto));  
 
    setArrData((prevData) => {
      if (prevData.includes(objeto)) {
        return prevData.filter((rent) => rent != objeto)
      }
      return ([...prevData, objeto])
    })
    // Convertir el objeto a una cadena JSON y guardarlo en localStorage con la clave única
    console.log(arrData)
    const objectsInfo = JSON.stringify([...arrData, objeto]);
    localStorage.setItem('arrData', objectsInfo);
  }
  

  async function loadMorePosts() {
    const nextPage = page + 1
    const nextRents = await getData(nextPage, currencyFilter);
    if (nextRents?.length) {
      setPage(nextPage)
      setposts((prev) => [...prev, ...nextRents])
    } else {
      setIsLoading(false)
    }
    }
  useEffect(() => {
    if (inView) {
      loadMorePosts()
    }
    /* eslint-disable */
  }, [inView])
  /* eslint-enable */
  return (
    <>
    {posts.map((alquiler) => (
      <Publish
        key={alquiler.id}
        propertyTitle={alquiler.title || 'Titulo no disponible'}
        propertyArea={alquiler.total_area}
        propertyImage={alquiler.images && alquiler.images[0]}
        propertyBathrooms={alquiler.bathrooms}
        propertyBedrooms={alquiler.bedrooms}
        propertyType={alquiler.property_type}
        propertyCurrency={alquiler.currency}
        propertyZone={alquiler.zone_name}
        propertyPrice={alquiler.price}
        propertyOrigin={alquiler.origin}
        propertyLink={alquiler.url_link}
        saveLocalStorage={guardarEnLocalStorage}
        actualObject={alquiler}
      />
    ))}
    {isLoading? <p ref={ref}>Loading...</p>: <p>No hay mas publicaciones :|</p>}
      </>
  )
    }