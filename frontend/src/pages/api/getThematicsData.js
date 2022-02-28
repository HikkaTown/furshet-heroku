export default async function handler(req, res) {
  const response = await fetch(
    `http://localhost:1337/api/tematikis/?populate=*`
  );
  try {
    const data = await response.json();
    let arr = [];
    data.data.map((item) => {
      arr.push({
        id: item.id,
        name: item.attributes.Name_Category,
      });
    });
    const obj = {
      data: arr,
    };
    res.send(obj);
  } catch (error) {
    console.log(error);
  }
}
