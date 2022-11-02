//---HomeWork 1---

function user1(obj) {
  let myKeys = Object.keys(obj);
  for (let x in myKeys) {
    console.log(myKeys[x]);
  }
  for (let key in obj) {
    if ( typeof obj[key] === "object" )
    {user1(obj[key]);
    }
  }
  return myKeys;
}

//cach2: bai chua
// function user(object,x=[]) {
//   let keys = x ;
//   for (let key in object){
//     keys.push(key);
//     if (typeof object[key] === 'object' ){
//       user(object[key],keys)
//     }
//   }
//   return keys
// }

let person = {
  name: "hai",
  age: 48,
  appearence: {
    haircolor: "green",
    eyesColor: {
      sayHi: "1",
      sayTow: "2",
      world: "bye",
    },
  heigth: 1.7, // unit: meter
  weight: 70, //unit: kilogram
  },
  fullName: function () {
    return `${this.name} ${this.age}`;
  },
  logo: [10, 30, 75],
};
// console.log(user(person));
user1(person);
user(person);


// function typeofKey (obj) {//in ra key
//   for(let key in obj) {
//     console.log(`${obj[key]}: `,typeof obj[key]);
//   }
// }
// typeofKey(person);







// let myKeys = Object.keys(person);
// console.log(myKeys)


//------HomeWork 2------
// input([21,4,5,-1],3,99)
//output (21,4,5,99,-1)

// function insertArray(arr, ind, val) {
//   arr.splice(ind, 0, val);
//   console.log(arr);
// }
// insertArray([21, 4, 5, -1], 3, 99);
