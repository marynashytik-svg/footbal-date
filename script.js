const screens = document.querySelectorAll(".screen");

function showScreen(id){
    screens.forEach(screen=>screen.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

const continueBtn=document.getElementById("continueBtn");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const foodBtn=document.getElementById("foodBtn");
const nextBtn=document.getElementById("nextBtn");
const finishBtn=document.getElementById("finishBtn");

let selectedFood="";

continueBtn.onclick=()=>{
    showScreen("screen2");
}

yesBtn.onclick=()=>{
    showScreen("screen3");
}

foodBtn.onclick=()=>{
    showScreen("screen4");
}

document.querySelectorAll(".food-card").forEach(card=>{

card.onclick=()=>{

document.querySelectorAll(".food-card")
.forEach(c=>c.classList.remove("selected"));

card.classList.add("selected");

selectedFood=card.dataset.food;

}

});

nextBtn.onclick=()=>{

if(selectedFood===""){

alert("Please choose one option 😊");

return;

}

showScreen("screen5");

}

finishBtn.onclick=()=>{

showScreen("screen6");

// EmailJS добавим позже

}

let messages=[
"No 😅",
"Really?",
"Think again...",
"Come on...",
"Last chance..."
];

let index=0;

function moveButton(){

const maxX=window.innerWidth-160;

const maxY=window.innerHeight-80;

noBtn.style.position="fixed";

noBtn.style.left=Math.random()*maxX+"px";

noBtn.style.top=Math.random()*maxY+"px";

if(index<messages.length){

noBtn.innerText=messages[index];

index++;

}else{

noBtn.style.display="none";

}

}

noBtn.addEventListener("touchstart",e=>{

e.preventDefault();

moveButton();

});

noBtn.addEventListener("mouseover",moveButton);
