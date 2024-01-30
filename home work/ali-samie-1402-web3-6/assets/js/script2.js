// function delFn(){
//     document.getElementById('demp').remove();
// }
let step=1;
function goStep(num){
    if(num==1){
        document.getElementById('delStep1').style.display='block';
        document.getElementById('delStep2').style.display='none';
        document.getElementById('delStep3').style.display='none';
        document.getElementById('delStep1').style.backgroundColor='darkblue';
        document.getElementById('delStep1').style.color='white';
}else if(num==2){
    document.getElementById('delStep2').style.display='block';
    document.getElementById('delStep1').style.display='none';
    document.getElementById('delStep3').style.display='none';
    document.getElementById('delStep1').style.backgroundColor='green';
    document.getElementById('delStep1').style.color='white';
    document.getElementById('delStep2').style.backgroundColor='darkblue';
    document.getElementById('delStep2').style.color='white';
}else if(nim==3){
    document.getElementById('delStep2').style.display='block';
    document.getElementById('delStep1').style.display='none';
    document.getElementById('delStep3').style.display='none';
    document.getElementById('delStep2').style.backgroundColor='green';
    document.getElementById('delStep2').style.color='white';
    document.getElementById('delStep1').style.backgroundColor='green';
    document.getElementById('delStep1').style.color='white';
    document.getElementById('delStep3').style.backgroundColor='darkblue';
    document.getElementById('delStep3').style.color='white';
}
}
goStep(1)