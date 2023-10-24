import InfiniteScroll from "../infinite-scroll-posts";
import getData from "../actions";
import { usePathname, useSearchParams } from "next/navigation";

export default async function MonedaPage({ params }) {
  const posts = await getData(1, decodeURIComponent(params.moneda))
  return (
    <>
    <InfiniteScroll firstPage={posts} currencyFilter={decodeURIComponent(params.moneda)}/>
    </>
  )
}