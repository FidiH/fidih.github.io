document.body.addEventListener("click", function(element) {
  
  if(element.target.id == "btn-menu" || element.target.classList.contains("menu")){
    document.querySelector(".menu").classList.add("geser")
  } else{
    document.querySelector(".menu").classList.remove("geser")
  }

})

window.addEventListener("scroll", function(e) {
  if(window.scrollY > 1){
    document.querySelector("header").classList.add("efekHeader")
  }else{
    document.querySelector("header").classList.remove("efekHeader")
  }
})