// en Removes the last element of an array, and returns that element
// fa آخرین عنصر یک آرایه را حذف می کند و آن عنصر را برمی گرداند
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
document.getElementById("demo").innerHTML = fruits;
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let removed = fruits2.pop();
document.getElementById("demo1").innerHTML = removed;
console.log(fruits2);

//en Creates a new array with the result of calling a function for each array element
//fa یک آرایه جدید با نتیجه فراخوانی یک تابع برای هر عنصر آرایه ایجاد می کند
const numbers3 = [4, 9, 16, 25];
document.getElementById("demo2").innerHTML = numbers3.map(Math.sqrt);
const numbers1 = [65, 44, 12, 4];
const newArr = numbers1.map(myFunction);
document.getElementById("demo3").innerHTML = newArr;
function myFunction(num) {
  return num * 10;
}

//en Returns a Array Iteration Object, containing the keys of the original array
//fa یک شی تکرار آرایه، حاوی کلیدهای آرایه اصلی را برمی‌گرداند
//const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
//const keys = fruits3.keys();
//let text = "";
//for (let x of keys) {
//  text += x + "<br>";
//}
//document.getElementById("demo4").innerHTML = text;

// const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Object.keys(fruits4);
//let text = "";
//for (let x of keys) {
//  text += x + "<br>";
//}
//document.getElementById("demo4").innerHTML = text;
//The Array.key() method is not supported in Internet Explorer

//en Joins all elements of an array into a string
//fa تمام عناصر یک آرایه را به یک رشته متصل می کند
//const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
//let text = fruits4.join();
//document.getElementById("demo5").innerHTML = text;
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits4.join(" and ");
document.getElementById("demo5").innerHTML = text;

//en Creates an array from an object
//fa یک آرایه از یک شی ایجاد می کند
//let text = "ABCDEFG"
//const myArr = Array.from(text);
//document.getElementById("demo").innerHTML = myArr;
//The Array.from() method is not supported in Internet Explorer

//en Maps all array elements and creates a new flat array
//fa همه عناصر آرایه را نقشه برداری می کند و یک آرایه مسطح جدید ایجاد می کند
const myArr = [1, 2, 3, 4, 5,6];
const newArr1 = myArr.flatMap((x) => x * 2);
document.getElementById("demo6").innerHTML = newArr;

//en Fill the elements in an array with a static value
//fa عناصر موجود در یک آرایه را با یک مقدار ثابت پر کنید
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo7").innerHTML = fruits5.fill("Kiwi");
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo8").innerHTML = fruits6.fill("Kiwi",2,4);
//The fill() method is not supported in Internet Explorer

//en Checks if every element in an array pass a test
//fa بررسی می کند که آیا هر عنصر در یک آرایه آزمایشی را پشت سر می گذارد یا خیر
const ages = [32, 33, 16, 40];
document.getElementById("demo").innerHTML = ages.every(checkAge);

function checkAge(age) {
  return age > 18;
}

//en Reduce the values of an array to a single value (going left-to-right)
//fa مقادیر یک آرایه را به یک مقدار کاهش دهید (از چپ به راست)
const numbers = [175, 50, 25];
document.getElementById("demo9").innerHTML = numbers.reduce(myFunc);
function myFunc(total, num) {
  return total - num;
}
const numbers5 = [15.5, 2.3, 1.1, 4.7];
document.getElementById("demo10").innerHTML = numbers5.reduce(getSum, 0);
function getSum(total, num) {
  return total + Math.round(num);
}

//en Allows you to add properties and methods to an Array object
//fa به شما امکان می دهد تا ویژگی ها و متدهایی را به یک شیء آرایه اضافه کنید
// Add a new method
Array.prototype.myUcase = function() {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };
  // Use the method on any array
  const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
  fruits.myUcase();
  document.getElementById("demo11").innerHTML = fruits7;