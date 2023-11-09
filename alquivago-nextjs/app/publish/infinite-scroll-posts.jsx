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
    setArrData((prevData) => {
      const foundIndex = prevData.findIndex((rent) => rent.id === objeto.id);
      const updatedData = [...prevData];
  
      if (foundIndex !== -1) {
        updatedData.splice(foundIndex, 1);
      } else {
        updatedData.push(objeto);
      }
  
      // Guardar el array en la cookie
      document.cookie = `arrData=${JSON.stringify(updatedData)}`;
  
      return updatedData;
    });
  };
  
  // Leer la cookie al cargar el componente
  useEffect(() => {
    const cookieArrData = document.cookie
      .split('; ')
      .find(row => row.startsWith('arrData='));
  
    if (cookieArrData) {
      console.log(JSON.parse(decodeURIComponent(cookieArrData).split('=')[1]))
      const parsedData = decodeURIComponent(cookieArrData.split('=')[1]);
      setArrData(JSON.parse(parsedData));
    }
  }, []);
  

  // Save arrData to localStorage when it changes
  useEffect(() => {

    const objectsInfo = JSON.stringify(arrData);
    localStorage.setItem('arrData', objectsInfo);
  }, [arrData]);


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
    {isLoading? <p className="text-slate-500" ref={ref}>Cargando...</p>: <p className="text-slate-500">No hay mas publicaciones :|</p>}
      </>
  )
    }