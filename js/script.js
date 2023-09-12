const activitee = document.getElementById("activitee");
const timerElement = document.getElementById("timer");
const pause = 5;
const depart = 25;
let temps = depart*60;
let minutes = parseInt(temps / 60, 10);
let secondes = parseInt(temps % 60, 10);
const bouton = document.getElementById("start");
bouton.addEventListener("click", () =>{
    
    DemarrerTimer();
});


function DemarrerTimer(){
    temps--;
    setInterval(diminuerTemps, 1000);
}

function affichageTimer(minutes, secondes){
    if (minutes<10){
        minutes = "0"+minutes;
    }
    if (secondes<10){
        secondes = "0"+secondes;
    }

    timerElement.innerText= `${minutes} : ${secondes}`;

}

function diminuerTemps(){

    minutes = parseInt(temps / 60,10) ;
    secondes = parseInt(temps % 60,10);

    affichageTimer(minutes,secondes);

    temps--;
    if(temps <= 0){
        temps = pause*60;
        activitee.innerText = "Pause";
    }

}