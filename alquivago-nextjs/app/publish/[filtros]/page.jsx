import InfiniteScroll from "../infinite-scroll-posts";
import getData from "../actions";
import { usePathname, useSearchParams } from "next/navigation";

export default async function MonedaPage({ params }) {
  const posts = await getData(1, decodeURIComponent(params.filtros.replace('-', '&').replace('_', '&')))
  return (
    <section className='flex flex-col justify-center items-center bg-white'>
    <InfiniteScroll firstPage={posts} currencyFilter={decodeURIComponent(params.filtros.replace('-', '&'))}/>
    </ section>
  )
}