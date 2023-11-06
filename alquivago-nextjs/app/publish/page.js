import InfiniteScroll from './infinite-scroll-posts';
import getData from './actions'
export default async function Page () {
  const posts = await getData(1);
  return (
    <>
    <section className='flex flex-col justify-center items-center bg-white'>
      <InfiniteScroll firstPage={posts}/>
    </section>
    </>
  );
}
