export default async function handler(req, res) {
  const response = await fetch(
    `http://localhost:1337/api/stranicza-novostej?populate=*`
  );
  try {
    const data = await response.json();

    data.data;
    res.send({
      title: data.data.attributes.title,
      meta_title: data.data.attributes.meta_title,
      meta_description: data.data.attributes.meta_description,
    });
  } catch (error) {
    console.log(error);
  }
}
