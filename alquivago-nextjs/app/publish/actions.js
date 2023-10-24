'use server'
export default async function getData (pageNumber, currency) {
  const res = await fetch(`https://alquivago-flask-apis.vercel.app/api/v1/rent/inmuebles?page=${pageNumber}&${currency}`);
  const posts = await res.json();
  return posts.rents;
}