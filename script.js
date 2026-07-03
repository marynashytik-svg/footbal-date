const screens = document.querySelectorAll(".screen");

function showScreen(id){
    screens.forEach(screen=>{
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}

const continueBtn=document.getElementById("continueBtn");
const questionBtn=document.getElementById("questionBtn");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const foodBtn=document.getElementById("foodBtn");
const nextBtn=document.getElementById("nextBtn");
const finishBtn=document.getElementById("finishBtn");

let selectedFood="";

continueBtn.addEventListener("click",()=>{

    showScreen("screen2");

});

questionBtn.addEventListener("click",()=>{

    showScreen("screen3");

});

yesBtn.addEventListener("click",()=>{

    showScreen("screen4");

});

foodBtn.addEventListener("click",()=>{

    showScreen("screen5");

});

document.querySelectorAll(".food-card").forEach(card=>{

    card.addEventListener("click",()=>{

        document.querySelectorAll(".food-card").forEach(item=>{

            item.classList.remove("selected");

        });

        card.classList.add("selected");

        selectedFood=card.dataset.food;

    });

});

nextBtn.addEventListener("click",()=>{

    if(selectedFood===""){

        alert("Please choose one option 😊");

        return;

    }

    showScreen("screen6");

});

finishBtn.addEventListener("click",()=>{

    showScreen("screen7");

    // EmailJS отправку подключим позже

});

const noMessages=[

"No 😅",

"Really?",

"Think again...",

"Come on...",

"Last chance 😏"

];

let noIndex=0;

function moveNoButton(){

    const padding=20;

    const maxX=window.innerWidth-noBtn.offsetWidth-padding;

    const maxY=window.innerHeight-noBtn.offsetHeight-padding;

    noBtn.style.position="fixed";

    noBtn.style.left=Math.random()*maxX+"px";

    noBtn.style.top=Math.random()*maxY+"px";

    if(noIndex<noMessages.length){

        noBtn.textContent=noMessages[noIndex];

        noIndex++;

    }else{

        noBtn.style.display="none";

    }

}
noBtn.addEventListener("mouseover",moveNoButton);

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    moveNoButton();

});

window.addEventListener("resize",()=>{

    if(noBtn.style.position==="fixed"){

        moveNoButton();

    }

});

// ---------- EmailJS placeholder ----------

function sendAnswer(){

    console.log({

        answer:"YES",

        food:selectedFood,

        date:new Date().toLocaleString(),

        userAgent:navigator.userAgent

    });

    /*
    Здесь позже подключим EmailJS:

    emailjs.send(...)

    */
}

// Отправка после открытия последнего экрана

finishBtn.addEventListener("click",()=>{

    sendEmail(selectedFood);

});

// Показываем первый экран при загрузке

showScreen("screen1");
