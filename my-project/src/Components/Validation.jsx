function Validation(Item) {
  // if (Item === undefined) {
  //   return true;
  // } else {
  let datas;
  if (Item !== undefined) {
    datas = [
      Item.username.trim() === "",
      Item.email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/) ===
        null,
      Item.transactions === "",
    ];
  } else {
    datas = [false, false, false];
  }
  //   console.log(datas.includes(false));
  //   if (datas.includes(false) === false) {
  //     const allvalues = Object.values(Item);
  //     console.log(allvalues);
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  return datas;
}

export { Validation };
