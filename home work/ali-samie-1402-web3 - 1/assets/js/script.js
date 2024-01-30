//var city=prompt('please enter your city: ');
//console.log(city=='tehran');

//var x=12;
//var y=15;
//console.log(x>y);

//var age=Number(prompt('plese enter your age: '));
//console.log(age>15 && age<25);

var temp = 40;
if(temp>25){
    console.log('hot')
}else if(temp<=25 && temp>10){
    console.log('cold')
}

var hour = 12;
if(hour>0 && hour<=10){
    console.log('good morning');
}else if(hour>10 && hour<=16){
    console.log('good noone');
}else if(hour>16 && hour<=24);{
    console.log('good night');
}

//var fname = prompt('enter name : ');
//var txt=null;
//if(fname<=2){
//    txt='wrong';
//}else {
//    txt='it is ok!'
//}
//alert(txt);

var weekDay = Number(prompt('enter num from 1 to 7 :'));
switch (weekDay) {
    case 1 :
        console.log('shanbe');
        document.getElementById('demo').innerText= 'shanbe';
        break;
    case 2 :
        console.log('yekshanbe');
        document.getElementById('demo').innerText= 'yekshanbe';
        break;
    case 3 :
        console.log('doshanbe');
        document.getElementById('demo').innerText= 'doshanbe';
        break;
    case 4 :
        console.log('seshanbe');
        document.getElementById('demo').innerText= 'seshanbe';
        break;
    case 5 :
        console.log('charshanbe');
        document.getElementById('demo').innerText= 'charshanbe';
        break;
    case 6 :
        console.log('pangshambe');
        document.getElementById('demo').innerText= 'pangshambe';
        break;
    case 7 :
        console.log('jomee');
        document.getElementById('demo').innerText= 'jomee';
        break;
    default:
        console.log('no support');
        document.getElementById('demo').innerText= 'no support';
}

//var txt=(num%2==0)? 'zooj' : 'fard';
//console.log(txt);
