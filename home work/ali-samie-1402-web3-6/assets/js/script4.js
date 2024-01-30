let second=0;
let minute=0;
let hour=0;
let day=0;
function addsecond(){
    second ++;
    if(second==60){
        minute ++;
        second=0;
    }
    if(minute==60){
        hour ++;
        minute=0
    }
    if(hour==24){
        day ++;
        hour=0;
    }
    document.getElementById('second').innerText=(second<10)?`0${second}`:second;
    document.getElementById('minute').innerText=(minute<10)?`0${minute}`:minute;
    document.getElementById('hour').innerText=(hour<10)?`0${hour}`:hour;
    document.getElementById('day').innerText=(day<10)?`0${day}`:day;

}
setInterval(addsecond,1000); 