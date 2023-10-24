import InfiniteScroll from "../infinite-scroll-posts";
import getData from "../actions";

export default async function MonedaPage({ params }) {
  const posts = await getData(1, decodeURIComponent(params.moneda))
  console.log(decodeURIComponent(params.moneda))
  return (
    <>
    <InfiniteScroll firstPage={posts} currencyFilter={decodeURIComponent(params.moneda)}/>
    </>
  )
}