let count = 0;
let updateCounter=function(){
  let countElement=document.getElementById('counter');
  if(count<0){
    countElement.style.backgroundColor='red';
  }else if(count>=0 && count<10){
    countElement.style.backgroundColor='orenge';
  }else {
    countElement.style.backgroundColor='green';
  }
  countElement.innerText=count;
}
let showAlert = function() {
  count++;
  updateCounter();
}
function  minusHandler() {
  count--;
  updateCounter();
}
let resetHandler= () =>{
  count=0;
  updateCounter();
}