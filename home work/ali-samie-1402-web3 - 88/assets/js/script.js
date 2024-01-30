// // class Car {
// //   speed=80;
// //   color='red';
// // }
// // let myCar=new Car();
// // let yourCar=new Car();
// class Wallet{
//   constructor(id,p,elId){
//       this.price=p;
//       this.userId=id;
//       this.elementId=elId;
//       this.updateView();
//   }
//   get price(){
//     return this._price+'doller'
//   }
//   set price(){
//     if(p>0) this._price=p;
//     else this._price=0;
//   }
//   info(){
//     console.log(`your wallet id=${this.userId} price = ${this.price}`)
//   }
//   charge(p){
//     this.price=this.price+p;
//     this.updateView();
//   }
//   buy(p){
//     this.price=this.price-p;
//     this.updateView();
//   }
//   updateView(){
//     document.getElementById(this.elementId).innerText=`your wallet id=${this.userId} price = ${this.price}`;
//   }
// }
// let v1=new Wallet(10,5000,'user2');
// v1.charge(2000);
// v1.charge(5000);
// v1.buy(1000);
// v1.info();
// let v10=new Wallet(15,323000,'user10');
// v10.info();

// class MyMath{
//   static abs(p){
//     if(p<0) return p*-1;
//     else return p
//   }
// }
// let m=new MyMath();
// document.getElementById('demo').addEventListener('click',function(){
//   showNumber(15)
// });
// function showNumber(id){
//   console.log(id);
// }
// document.getElementsByTagName('body')[0].onscroll=function(){
//   alert('hi')
// }
let lastPosition=document.body.scrollY;
function scrolHandler(e){
  if(e.scrollY>300){
    document.getElementById('header').style.top='-50px'
  }else{
    document.getElementById('header').style.top='0px'
  }
  let direction=e.scrollY-lastPosition;
  lastPosition=e.scrollY;

  if(direction>0){
    document.getElementById('header').style.top='-50px'
  }else{
    document.getElementById('header').style.top='0px'
  }
}