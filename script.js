function startSlider(className){

const slider=document.querySelector("."+className);

if(!slider) return;

const slides=slider.querySelectorAll(".slide");

let index=0;

setInterval(()=>{

slides[index].classList.remove("active");

index=(index+1)%slides.length;

slides[index].classList.add("active");

},3000);

}

startSlider("diamond-slider");

startSlider("kerala-slider");
