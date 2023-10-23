'use server'
export default async function getData (pageNumber) {
  const res = await fetch(`https://alquivago-flask-apis.vercel.app/api/v1/rent?page=${pageNumber}`);
  const posts = await res.json();
  return posts.rents;
}