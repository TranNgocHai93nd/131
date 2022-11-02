const obj1 = {  y: 42 };
const obj2 = {  y: 13 };
const obj3 = {  y: 14 };
const obj4 = {  y: 15 };
const merge = function (...obj) {
    console.log(Array.isArray(obj) );// true,Như vậy toán tử Spread khi làm đối số trar về dạng màng
     return obj.reduce((acc, cur,index) => {
        // console.log(`${index}:`,acc);
        return { ...acc,...cur }}
        );
}

const mergedObj1 = merge(obj1, obj2,obj3,obj4);
// Object { foo: 'baz', x: 42, y: 13 }
console.log(mergedObj1);


const users = [
    { id: 1, email: 'dcontreras@email.tld' },
    { id: 2, email: 'afeher@email.tld' },
    { id: 3, email: 'odj@email.tld' },
  ];
  
  const profiles = [
    { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
    { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
    { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
  ];
  // cach 1: dung map và find()---> tuy code ngắn nhung lại không tối ưu với mảng có big data vì phairtimf kiếm
let resultMegr = users.map (function (user) {
    let profile = profiles.find( function (profile){
            return user.id === profile.userId;})
    return {...user,profile}// type Error : vì object không rải được vào mảng,còn các object không dùng Spread
    })

  console.log(resultMegr); 
  //Cách 2 : dung Reduce chuyển profile thanh object key dung map tararveef lươn
  //Chuyển Profiles thành 1 object key
let profileId = profiles.reduce(function (acc,profile) {
    let { userId } = profile
   return {...acc,[userId]:profile}
},{})
console.log(profileId);

let { userId } = profiles[0]
console.log([userId] );
const obja = {
    key1: 'value 1.1',
    key2: null,
    key3: 'value 1.3',
    key4: ''
  };
  
  const objb = {
    key1: 'value 2.1',
    key2: 'value 2.2',
    key3: 'value 2.3',
    key4: 'value 2.4',
    key5: 'value 2.5'
  };
  console.log(objc = {...objb,...obja});
  console.log(objc = Object.assign(objb,obja));

  //Tạo mảng có n giá trị trả về mảng mới không gồm các phần tử không trùng
  let arrA = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]
 function newArray1 (arr) {
    let result = []
    arr.forEach(function (el) {
        if (!result.includes(el))
            result.push(el)
    });
    return result.sort((a,b)=>a-b);
 }
 console.log(newArray1(arrA));
 function newArray2 (arr) {// sd hàm indexOf nều không có thì push vào 
    let result = []
   for (let i=0; i<arr.length ; i++){
     if (result.indexOf(arr[i]) === -1)
        result.push(arr[i])
   }
   return result.sort((a,b)=>a-b);
 }
 console.log(newArray2(arrA));
 function newArray3 (arr) {// sd hàm indexOf nều không có thì push vào 
    let result = [];
        result = arr.filter( function (item) {
            return result.includes(item)? '' : result.push(item)
    })
    return result.sort((a,b)=>a-b);
 }
 console.log(newArray3(arrA));
 
 
// Bài tập trắc nghiem
// 1-false
// 2-true
// 3-true
// 4-da3;
// 5-da4
// 6-da1
// 7-da3
// 8-da4
// 9-da3
// 10-da3
// 11-da3
// 12-da2
// 13-da4

//Thuc hanh
//BT1: đảo ngược chuỗi
function reserveStr (str){
    return [...str].reverse().join('')
}
console.log(reserveStr('abc'));
//BT2: Tìm và đếm số lần xuát hiện của phần tử mảng
let n = 12347875514;
 function numberMax (num) {
    let max = num.toString().split('').sort((a,b)=>a-b).pop()
    return  console.log(`Chữ số Max trong sô ${num} là:`,max); 
 }
numberMax(n);
//BT3: Tim giá trị cso lần lặp lơn nhất mảng
function newArray4 (arr) {
    let newArr = Array.from(new Set (arr))
     let arrObj = newArr.map(function (el){
        let results = arr.filter(function (val) {
            return (val === el)
        })
        return {value: el, count:results.length} 
    })
    return arrObj.sort(compare).pop()
}
 function compare (a,b){
    let c = a.count;
    let d = b.count;
    if (c>d){return 1;}
    if (c<d){return -1;}
    if (c==d){return 0;}
    }   
console.log(newArray4(arrA)); 
//BT tạo danh sách
let nameInput = document.querySelectorAll('#name');
let phoneInput = document.querySelectorAll('#phone')
let list_item = document.querySelector('.list_item')
let btn_Add = document.querySelector('.user_input-item_btn')
let ul = document.querySelectorAll
console.log(btn_Add);

let app = {
  profiles_user : [],
  get (...profile) {
    return this.profiles_user.push(...profile)
  }
}


function add(){
  let ul = document.createElement('ul')
  ul.className = 'list_item-info'
  let li_Name = document.createElement('li')
  li_Name.className = 'list_name'
  li_Name.innerText = nameInput.value
  let li_Phone = document.createElement('li')
  li_Phone.className = 'list_phone'
  li_Phone.innerText = phoneInput.value
  ul.appendChild(li_Name)
  ul.appendChild(li_Phone)
  list_item.appendChild(ul)
  profile_info = {
    name: nameInput.value,
    phone: phoneInput.value
  }
  
}
 btn_Add.addEventListener('click',add)

console.log(ul);

