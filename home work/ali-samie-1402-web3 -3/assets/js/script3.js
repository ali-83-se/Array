//let sayHello=function(){
//    let username=document.getElementById('fname').value;
//    console.log(`hello dear ${username}`);
//}
// function evenHandler() {
//     let fname =document.getElementById('fname').value;
//     if (fname.length <= 3) {
//         document.getElementById('fnameError').style.display='inlibe';
//     } else {
//         document.getElementById('fnameError').style.display='none';
//     }
// }
// let clickHandler=(element)=>{
//     let paragraphs=document.getElementsByTagName('p');
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].style.color = 'black';
//     }
//     element.style.color='red';
// }
let users=[{fname:'amir',age:22},{fname:'zahra',age:25}]
function showUser(){
    document.getElementById('demo').innerHTML = '';
    for(let i = 0; i < users.length; i++){
        document.getElementById('demo').innerHTML += `<li>${users[i].fname}-${users[i].age}</li>`
    }
}
function addToUser(){
    let f=document.getElementById('fname').value;
    document.getElementById('fname').value='';
    let a=Number(document.getElementById('age').value);
    document.getElementById('age').valu='';
    let user ={ fname: f ,age: a };
    users.push(user)
    console.log(users);
    showUser();
}
showUser();