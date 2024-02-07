
const plusIcon = document.querySelector("i.fa-plus");
const add = document.querySelector("input.addNewTask");
const listDiv = document.querySelector(".list");
const listUl = listDiv.querySelector('ul');



plusIcon.addEventListener('click', () => {
    if (add.style.display == 'block') {
        add.style.display = 'none'; 
    } else {
        add.style.display = 'block';   
    }
});


add.addEventListener('keypress', (event) => {
    let key = event.keyCode;
    if (key === 13) {
        if (add.value == "") {
            alert("You Must Enter a New Task!");
        } else {
            let ul = document.getElementsByTagName('ul')[0]; 
            let li = document.createElement('li'); 
            li.textContent = add.value;
            attachIconsToNewLi(li);
            ul.appendChild(li); 
            add.value = add.defaultValue;
        }
    }
});


listDiv.addEventListener('click', (event) => {
   if (event.target.tagName == "LI") {
        if (event.target.className == "completed") {
           event.target.className = "";
        } else {
           event.target.className = "completed";
        } 
   } 
});


listUl.addEventListener('click', (event) => {
    if (event.target.tagName == "I") {
        if (event.target.className == 'fa fa-trash') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li); 
        }
        if (event.target.className == 'fa fa-arrow-up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi){
                ul.insertBefore(li, prevLi);  
            }        
        } 
        if (event.target.className == 'fa fa-arrow-down') {
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if (nextLi){
                ul.insertBefore(nextLi, li);  
            }        
        }
    } 
});



function attachIconsToNewLi(li) {
    let remove = document.createElement('i');
        remove.className = 'fa fa-trash';
    
    let up = document.createElement('i');
        up.className = 'fa fa-arrow-up';
    
    let down = document.createElement('i');
        down.className = 'fa fa-arrow-down';
    
    
    li.appendChild(remove);
    li.appendChild(up);
    li.appendChild(down);
}
