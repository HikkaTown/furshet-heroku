// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


export default async function handler(req, res) {
  const response = await fetch(`http://localhost:1337/api/gastro-stations?populate=*&[filters][tematics][id][$eq]=${req.query.id}`);
  try {
    const {data} = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error)
  }
}
