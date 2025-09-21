
import {geserAside} from "./fungsi.mjs"

// universal events
window.addEventListener("click", function(e){
  
  // saat btnMenu diklik
  if(e.target.closest(".btnMenu")){
    geserAside(true)
  }
  
  // saat btnTutup diklik
  if(e.target.closest(".btnTutup")){
    geserAside(false)
  }
  
  if(e.target.closest("aside nav > *")){
    geserAside(false)
  }
})