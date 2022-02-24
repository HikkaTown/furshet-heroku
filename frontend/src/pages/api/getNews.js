export default async function handler(req, res) {
  const response = await fetch(`http://localhost:1337/api/novostis?populate=*`);
  try {
    const data = await response.json();
    let arr = [];
    data.data.map((item) => {
      arr.push({
        id: item.id,
        name: item.attributes.title,
        description: item.attributes.description,
        meta_title: item.attributes.meta_title,
        meta_description: item.attributes.meta_description,
        date: item.attributes.date,
        imagePc: item.attributes.slidersPc.data.attributes.url,
        imageTab: item.attributes.slidersTab.data.attributes.url,
        imageMob: item.attributes.slidersMob.data.attributes.url,
      });
    });
    res.send(arr);
  } catch (error) {
    console.log(error);
  }
}
