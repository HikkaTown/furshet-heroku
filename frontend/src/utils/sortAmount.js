const sortAmount = (data) => {
  let arr = [];
  data.map((item) => {
    arr.push(+(item.price.replace(' ', '')));
  });
  return [Math.min(...arr), Math.max(...arr)]
}

export default sortAmount;