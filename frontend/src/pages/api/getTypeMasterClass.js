export default async function handler(req, res) {
  const response = await fetch(`http://localhost:1337/api/master-class-types/?populate=*`);
  try {
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.log(error)
  }
}