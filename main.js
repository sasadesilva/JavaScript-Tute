-----------Java Script tute------------------

// let yname = prompt("Enter a name: ","Sasanka");
// console.log(yname);
// let confi = confirm("Are you Student?");
// console.log(confi);

// let d = 234n;
// let s =123.65;
// console.log(d)
// let e ;
// console.log(e);
// console.log(typeof(e));

// let a = "13ddr5";
// console.log(parseInt(a));
// console.log(Number(s));
// console.log(3*6/2+8-20/2);

// let q = "3";
// q =+ 2;
// console.log(q);

// let name1 = "sasa";
// console.log(name1);

// let name1 ="Sasanka";
// console.log(name1);

// let a=20,b=20,c=20;
// console.log(a,b,c)

// let x;
// const y =7;

// x = y + 20;
// console.log(x);

// let s = "Sasanka Chandimal De"
// console.log(s.substring(2,4));
// console.log(s.length);
// console.log(s.split("a"));

// let arr = [12,"abc",25.369, true];
// console.log(arr.length);

// console.log(arr.reverse());

//object--------------------------------------

// let a = {
//   name: "Sasanka",
//   age: 30,
//   canFly: true,
//   languages: ["java", "node", "react", "aws"],
//   city: {
//     address1: "duwawaththa",
//     street: "road",
//   }
// };
// console.log(a.city.address1);
// console.log(a.languages[1]);

//---Function--------------------------------------------

// function displayName(name, age) {
//   console.log(`you are ${name} and age is ${age}`);
//   return age;
// }
// console.log(displayName("Sasa", 30));
// displayName("Amal", 35);
// displayName("Kamal", 25);

//--------------------------------------------

//

//---------------------------------------------

// let displayInfo1 = function (clz, age) {
//   let name = prompt("enter the name: ");
//   console.log(`Your name is ${name} and age is ${age} and class is ${clz}`);
// };

// displayInfo1("javascript", 29);

//-----------------Arro function---------------------------

// let displayInfo2 = (clz, age) => {
//   let name = prompt("enter the name: ");
//   console.log(`Your name is ${name} and age is ${age} and class is ${clz}`);
// };

// displayInfo2("javascript", 29);

// let newFunc = (name) => {
//   console.log(name);
// };
// newFunc("Sasanka");
//-----0r----------------------------

// let newFunc2 = (name) => console.log(name);

// newFunc2("Sasanka");

// let a = 5,
//   b = 6;

// console.log(a == b);
// console.log(typeof b);

// console.log(a !== b);

// let i = 10;
// console.log(i);
// console.log(++i);
// console.log(i);

// do {

// } while (condition);

// let arr = [12, "amila", 3.5, true, "sasa", "colombo"];

// console.log(
//   a.forEach((e1, index) => {
//     // there is no return in forEach()
//     return e1, index;
//   })
// );

// let result = a.map((e1, index) => {
//   return [e1, index];
// });
// console.log(result);

// for (index in arr) {
//   console.log(arr[index]);
// }

//----------To a Object----------

// let obj = {
//   name: "Sasanka",
//   age: 25,
//   city: "Galle",
// };

// for (key in obj) {
//   console.log(key, obj[key]);
// }

// let arr = [5, 10, 15, 20, 25];
// let result = arr.map((e1) => e1);
// console.log(result);

// let obj = [
//   {
//     name: "Saman",
//     age: 52,
//     city: "Galle",
//   },
//   {
//     name: "Viman",
//     age: 85,
//     city: "Halawatha",
//   },
//   {
//     name: "Saman",
//     age: 52,
//     city: "Galle",
//   },
// ];
// console.log(obj);

// let result = obj.map((e1, index) => ({
//   name: e1.name,
//   age: e1.age,
// }));
// console.log(result);

//---------filter()------------------------------

// let array = [1, 2, 3, 4, 5, 6, 7, 8];

// //get all even numbers
// let result = array.filter((e1) => e1 % 2 == 0);
// console.log(result);

// //get all even numbers and show it power 2
// let result2 = array.filter((e1) => e1 % 2 == 0).map((e1) => e1 ** 2);
// console.log(result2);

//--------------reduce()-------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce((pre, val) => {
//   return pre;
// });
// console.log(result);

// let result2 = arr.reduce((pre, val) => {
//     return val;
//   });
// console.log(result2);

// let result3 = arr.reduce((pre, val) => {
//     return pre+val;
//   });
// console.log(result3);

// let result3 = arr.reduce((pre, val) => {
//   return pre + val;
// }, -5);
// console.log(result3);  //intial value(-5 )became pre value

//---------------- empty array as a initial value-------------
// let result3 = arr.reduce((pre, val) => {
//     pre.push({
//         eVal: val + 5 * 3,
//         oVal:val
//     })
//     return pre;
//   },[]);
//   console.log(result3);

//---------------- empty object as a initial value-------------

// let result3 = arr.reduce((pre, val, index) => {
//   pre[`newObj${index + 1}`] = {
//     eVal: val + 5 * 3,
//     oVal: val,
//   };

//   return pre;
// }, {});
// console.log(result3);

//-----------------Math.random()------------------------------------

// console.log(Math.min(20, 21, 7, 58, 2, 96));
// console.log(Math.max(20, 21, 7, 58, 2, 96));
// console.log(Math.pow(2, 4));
// console.log(Math.abs(-52));
// console.log(Math.sqrt(16));
// console.log(Math.round(15.369));
// console.log(Math.ceil(15.369));
// console.log(Math.floor(15.369));
// console.log(Math.round(15.369));
// console.log((15.369).toFixed(2));

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 15));

// console.log(Math.floor(Math.random() * (15 - 5)) + 5);
// //Math.floor(Math.random()*(Max -Min))+Min

//-----------Date()----------------------------------

// let today = new Date();

// console.log(today);
// console.log(today.toDateString());
// console.log(today.toString());

// console.log(today.toString().split(" "));
// console.log(today.toString().split(" ")[4]);

// console.log(today.getDate());
// console.log(today.getMonth()); //jan=0,feb=1,...
// console.log(today.getFullYear());
// console.log(today.getDay()); //sunday=0,monday=1,

//------------ES6------------------------------------------------------------

//Array destructuring------------------

// let arr = ["Amila", "upul", "Kumalra", 23, true];

// let [fname, mname] = arr;
// console.log(fname);
// console.log(mname);

//Object Destructuring---------------------------------

// let obj = {
//   name: "Sasanka De Silva",
//   age: 30,
//   address: {
//     address1: "Duwawaththa",
//     address2: "Gonapinuwala",
//   },
// };

// const { name, address } = obj;
// console.log(name);
// console.log(name, address);

// const {
//   name,
//   address: { address2 },
// } = obj;
// console.log(name,address2);

//spread--------------------------------

// let newObj = obj;
// console.log(obj);
// console.log(newObj);

// obj.city = "Galle";
// console.log(obj);
// console.log(newObj);

//----------------
// let newobj2 = { ...obj }; //spread
// obj.city = "Kandy";
// console.log(newobj2);
// console.log(obj);

// //for a array

// let arr = [1, 2, 3, 4, 5, 6];
// let newArr = [...arr];

// console.log(arr);
// console.log(newArr);

// //after update the array
// arr.push(7);
// console.log(arr);
// console.log(newArr);

// //---------
// let newObj3 = {
//   ...obj,
//   a() {
//     console.log("Im a function");
//   },
//   printYourName(fname) {
//     console.log(fname);
//   },
// };
// console.log(newObj3);
// console.log(obj);

//======== OOP concepts===================================

// class Person {
//   static name = "Amila"; //Static attribute can only use with class. cannot use with object of class
//   age = 25;
//   pnumber;

//   constructor(name, age, pnumber) {
//     this.name = name;
//     this.age = age;
//     this.pnumber = pnumber;
//     this.city = "Colombo";
//   }

//   displayName() {
//     console.log(`your name is : ${this.name}`);
//   }
// }

// class Mod extends Person {
//   type = "mod";
//   constructor(name, age, pnumber, id) {
//     super(name, age, pnumber); // super() is used for passing the values to parents class constructor
//     this.id = id;
//   }

//   deleteUser(user) {
//     users = users.filter((e1) => e1.pnumber != user.pnumber);
//   }
// }

// const p1 = new Person("Nimal", 23, 458269);
// const p2 = new Person("Saman", 36, 596328);
// const p3 = new Person("Amal", 52, 36958);

// let users = [p1, p2, p3];

// p1.displayName();
// console.log(p1.name);
// console.log(p1.age);
// //console.log(p1.city);
// p3.displayName();

// console.log(Person.name);

// console.log(users);

// const mod1 = new Mod("Kumara", 58, 8925, 1001);
// mod1.deleteUser(p1);
// console.log(users);

//-----------------------

// setTimeout(() => {
//     console.log("Hi codies..");    //delay 5 second and print then
// }, 5000)

// setInterval(() => {
//     console.log("Hi Baby");
// },2000)

//promise()------------------------------------------------------------

// let myFun = () => {
//   return new Promise((resolve, reject) => {

//     console.log("Amila Upul Kumara");

//     let error = true;

//     if (error) {
//       reject("You have error..!");
//     } else {
//       resolve(["You are Success", "Amila", "Upul"]);
//     }
//   });
// };

// //myFun calling
// myFun().then((res) => console.log(res)).catch((err) => console.log(err));

//-------------------------async and await()------------------------------------------------------

// let arr = [];

// const myFunc = async (val) => {
//   let out = await new Promise((res, rej) => {
//     setTimeout(() => {
//       arr.push(val);
//       let err = false;

//       err ? rej("Some error") : res("Data update is success");
//     }, 2000);
//   });
//   console.log(out);
//   console.log(arr);
// };

// myFunc("Upul");

//get data from server------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// using async and await above code

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   //console.log(res);

//   const data = await res.json();
//   console.log(data);
// };

// getData();

//--send data to a server----------------------------------------------------

const sendData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      userId: 123,
      title: "Some title",
      body: "Do some Work",
    }),
  });
  //console.log(res);

  const data = await res.json();
  console.log(data);
};

sendData();
