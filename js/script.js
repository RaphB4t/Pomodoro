//variables

let activitee = document.getElementById("activitee");
let travail = true;
let timer = document.getElementById("timer");

let tempsDePause = 1;
let tempsDeTravail = 1;

let temps = tempsDeTravail*60;
let minutes = parseInt(tempsDeTravail/60,10);
let secondes = parseInt(tempsDeTravail % 60,10);

let boutonPlay = document.getElementById("start");
let boutonReset = document.getElementById("reset");

//ecouteur du boutton

boutonPlay.addEventListener("click", () =>{
    temps--;
    affichageTimer(minutes,59); 
    
    DemarrerTimer();
});

// fonctions du timer

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

    timer.innerText= `${minutes} : ${secondes}`;

}

function diminuerTemps(){

    minutes = parseInt(temps / 60,10) ;
    secondes = temps % 60;

    if(temps <= 0){
        affichageTimer(minutes,0); 
        ChangementActivite();
    }else{                                      //on voit pas la dernière seconde bien encadrer dans des conditions    
        temps--;
        affichageTimer(minutes,secondes);
    }

    

}

//change du temps de pause au temps de travail et inversement
function ChangementActivite(){
    if(travail){
        temps = tempsDePause * 60;
        activitee.innerText = "Pause";
        travail=false;
    }else{
        temps = tempsDeTravail * 60;
        activitee.innerText = "Travail";
        travail=true;
    }
    minutes = parseInt(temps / 60,10) ;
    secondes = parseInt(temps % 60,10);
    affichageTimer(minutes,0);
}

function reset(){
    location.reload;
}