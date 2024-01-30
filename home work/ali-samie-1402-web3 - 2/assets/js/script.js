//let stds="ali,rez,amir"
//let stdArr=stds.split(',');
//console.log(stdArr);

//let txt = 'hello my friend';
//let s = txt.substring(0,4);
//console.log(s);

//for(let i = 0; i <= 100; i += 1) {
//  console.log(i);
//}
//console.log('end');
//for(let i = 0; i <= 100; i += 1) {
//  if (i % 2 == 0){
//    console.log(i + "even");
//  }else {
//    console.log(i + 'odd');
//  }
//}
//console.log('end');

//for(let i = 1; i <= 100; i += 1) {
//  console.log(2 ** i);
//}
//console.log('end');
//for(let i = 0; i <= 100; i += 1) {
//  if (i == 2) {
//    continue;
//  }
//  console.log(i);
//}
//console.log('end');

//for(let i = 0; i <= 100; i += 1) {
//  if (i == 2) {
//    break;
//  }
//  console.log(i);
//}
//console.log('end');

//let sum=0;
//i=1
//for(i = 1; i <= 100; i++){
//  sum =sum + i;
//}
//sum =sum +i;
//sum =sum +i;
//sum =sum +i;
//sum =sum +i;
//console.log(sum);


//factorial=1;
//factorial = factorial * 2;
//factorial = factorial * 3;
//factorial = factorial * 4;
//factorial = factorial * 5;
//factorial = factorial * 6;
//factorial = factorial * 7;
//let factorial = 1 * 2 * 3 * 4 * 5 * 6 * 7;
//console.log(factorial);
//let factorial = 1;
//for (let i = 2; i <= 10; i++){
 // factorial = factorial + i;
//}
//console.log(factorial);

//let i=0;
//while (i<10) {
//  console.log(i);
//  i++;
//}
//let x=1;
//while (x<=10) {
//  i++;
//  if(x == 2) 
//    continue;
//  console.log(x);
//}

//let fname=prompt('enter name:');
//while (fname != 'ali') {
//  fname=prompt('enter name : ');
//}
//console.log(fname);

//let age = -1;
//while(age < 0 || age > 100){
//  age=Number(prompt('please enter age :'));
//}
//console.log('your age' + age)
//let time = 0;
//while(age <= 1 || age >= 24){
//  age=Number(prompt('please enter time :'));
//}
//console.log('your time' + time)

//let y = 15;
//do {
//  console.log(y)
//  y++;
//}while (i < 10);

// var city = 'tehran';
// txt = "your city ${city}";
// console.log(txt);

// function getName(){
//   let fname = prompt('enter name:');
//   console.log('hello ${fname}');
// }
// getName();

function sum(num1 , num2){
  return(num1 + num2);
}
let result = sum(10 , 15);
console.log(result); 

function fib(n)
{
    const result = [0, 1];
    for (var i = 2; i <= n; i++)
    {
        const a = result[i - 1];
        const b = result[i - 2];
        result.push(a + b);
    }
    return result[n];
}
console.log(fib(8));