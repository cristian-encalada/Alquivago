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
      />
    ))}
    {isLoading? <p ref={ref}>Loading...</p>: <p>No hay mas publicaciones :|</p>}
      </>
  )
    }