export function geserAside(e) {
  if(e){
    getElm("aside").style.left = "0"
    getElm("main").style.transform = "translateX(-110%)"
  }else{
    getElm("aside").style.left = "110%"
    getElm("main").style.transform = "translateX(0)"
  }
}



function getElm(elm){
  let el = document.querySelectorAll(elm)
  if(el.length == 1){
    return document.querySelector(elm)
    console.log("satu");
  }else{
    console.log("lebih");
    return el
  }
}