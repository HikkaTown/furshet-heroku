import axios from "axios";

const checkTypeId = (typeId) => {
  var response;
  if (typeId === "Мебель") {
    let obj = fetch("http://localhost:3000/api/getMebel")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  } else if (typeId === "Персонал") {
    axios("http://localhost:3000/api/getStafData").then((res) => {
      response = res.data;
    });
  } else if (typeId === "Декор") {
    axios("http://localhost:3000/api/getDecorData").then((res) => {
      response = res.data;
    });
  } else if (typeId === "Дезинфекция") {
    axios("http://localhost:3000/api/getDisinfectionData").then((res) => {
      response = res.data;
    });
  }

  return response;
};

export default checkTypeId;
