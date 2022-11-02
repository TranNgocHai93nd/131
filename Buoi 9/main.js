
//----------HomeWork1
// const myArray = [15,15,4,6,25,75];
// function myFunctionMin(arr){
//     let len = arr.length;
//     let min = arr[0];
//     for(let i=1 ; i<=len; i++){
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(myFunctionMin(myArray));

//---------- HomeWork2;
// let n=100;
// let m=100;
// for (let i=2; i<=n; i++){
//     let count=0;
//     for (let j=1; j<=m;j++){
//         if (i%j==0) {
//             count++;
//         }
//     }
//     if (count<=2){
//         console.log(i);
//     }
// }

//-----------Homework3;
// const arr = [3,7,21,8,1,11,46,30];
// let sum = arr.reduce(myFunction);//tinh tong day
// function myFunction(total,value,index,array){
//     return total + value;
// }
// console.log("Tong cua mang arr la:" + sum);

// console.log("Day so chan la:");// tim so chan trong mang
// function myFunction1 (arr1){
//     for (let x of arr1) {
//         if (x%2==0) {
//             console.log(x);
//         }
//     }
// }
// myFunction1(arr);

//----------Tinh tong so le trong mang
// function myFunction1 (arr1){
//     let sum =0;
//     for (let x of arr1) {
//         if (x%2!=0) {
//             sum += x;
//             }
//         }
//         return sum;
//     }

// console.log("Tong cac so le la:" + myFunction1(arr));

//-------tinh tong gia tri <20
// const newarr=arr.filter(myFunction2);
// function myFunction2 (value) {
//     return value <20
// }
// console.log(newarr);
// function myFunction3 (total,value) {
//     return total + value;
// }
// let y = newarr.reduce(myFunction3);
// console.log("Tong so le gia tri nho hon 20 la:" + y);
// const newarr1=arr.filter(myFunction4);
// function myFunction4 (value) {
//     return value >=15;
// }
// console.log(newarr1);



// //Cach 1 tim min max, mang
// console.log("max la:" + myFuntion4(arr));
// console.log("min la:" + myFuntion5(arr));
// function myFuntion4(arr2) {return Math.max.apply(null,arr2)}
// function myFuntion5(arr2) {return Math.min.apply(null,arr2)}


// // Cach 2 tim min va max mang
//  arr.sort(myFunction6);
//  function myFunction6(a,b) {return a-b;}
// console.log("min day la:" + arr[0]);
// console.log("max day la:" + arr[arr.length-1]);

// cach 3: tu lap ham min,max

// cho chuỗi, MindX , xuất ra mảng đảo ngược chiều lại


// let x = prompt("Nhập chuỗi ký tự để đảo ngược","")
// document.write("Chuỗi đảo ngược là: " +myFunction7(x));
// const x  = "Mindx";
// console.log(myFunction7(x));
// function myFunction7 (str) {
//     let myString= str;
//     let Arr = Array.from(myString);
//     let nArr = Arr.reverse();
//     let str1 = nArr.join("");
//     return str1;
// }
// checkYear(2044);
// check(2014);
//    function check (y) {
    
//     if (y%4==0 ){
//         console.log(y + " la nam nhuan") ;
//     } else {return console.log(y + " Khong la nam nhuan");}
// }
// 2 cách chinh tạo ra 1 Object là: dùng key work New chuyển các number, string, boolean thành object, 
// Object literal: Object thuần tuý
// let person = {} // khai bao nhu nay xua ra doi tuong Object
// person.name = "hai";
// person.age = "29";
// person.height = "1.75";
// console.log(person);

//const headingNode = document.getElementById('demo1');
const para = document.createElement("p");
const textpa = document.createTextNode("this is me");
para.appendChild(textpa);
//const parent = document.getElementById("demo");
const parent = document.getElementsByTagName("div");
parent.appendChild(para);
console.log(parent)










