function clickBtn(element,e) {
  console.log(`x ${e.offsetX}`)
  console.log(`y ${e.offsetY}`)
  let spElement=document.getElementById('ci');
  spElement.style.top=`${e.offsetY}px`
  spElement.style.left=`${e.offsetX}px`
}
