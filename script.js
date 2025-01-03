var fan=document.querySelector(".fan")
var zero=document.getElementById("zero")
var one=document.getElementById("one")
var two=document.getElementById("two")
var three=document.getElementById("three")
function stop(){
  fan.style.animationDuration=0+"s";
  }
function slow(){
  fan.style.animationDuration=3+"ms";
  }
function medium(){
  fan.style.animationDuration=2+"ms";
  }
function fast(){
  fan.style.animationDuration=1+"ms";
}
