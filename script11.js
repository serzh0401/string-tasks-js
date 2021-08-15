let arr = ['james', 'james', 'john'];

const map = ["_id", "name", "email", "balance"];

const obj = map.reduce((newObj, item) => {
  newObj[item] = item;
  return newObj;
}, {});

console.log(obj);