let tPosition=0;
let leftPosition=0;
let keyDown = (e)=> {
    if(e.key=='ArrowDown'){
        tPosition+=10;
    }else if(e.key=='ArrowUp' && tPosition>0){
        tPosition-=10;
    }else if(e.key=='ArrowRight'){
        leftPosition+=10;
    }else if(e.key=='ArrowLeft' && leftPosition>0){
        leftPosition-=10;
    }
    document.querySelector('.pointer').style.top=`${tPosition}px`
    document.querySelector('.pointer').style.left=`${leftPositionPosition}px`

}