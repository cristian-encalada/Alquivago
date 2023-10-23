import InfiniteScroll from "../infinite-scroll-posts";
import getData from "../actions";

export default async function MonedaPage({ params }) {
  const posts = await getData(1, params.moneda)
  console.log(posts)
  return (
    <>
    <InfiniteScroll firstPage={posts} currencyFilter={params.moneda}/>
    </>
  )
}