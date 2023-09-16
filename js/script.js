//variables

let activitee = document.getElementById("activitee");
let travail = true;
let timer = document.getElementById("timer");

let tempsDePause = 5;
let tempsDeTravail = 25;

let temps = tempsDeTravail * 60;
let minutes = parseInt(temps / 60, 10);
let secondes = parseInt(temps % 60, 10);

let boutonPlay = document.getElementById("BoutonDemarer");
let timer_lance = false;

//ecouteur du boutton

boutonPlay.addEventListener("click", () => {
    if (!timer_lance) {
        temps--;
        minutes = parseInt(temps / 60, 10);
        secondes = parseInt(temps % 60, 10);
        affichageTimer(minutes, secondes);
        boutonPlay.innerHTML = "Redémarrer";
        //ajouter <i class="fa-solid fa-rotate-right" style="color: #e60a0a;"></i>
        timer_lance = true;
        DemarrerTimer();
    } else {
        redemarrer();
    }

});

// fonctions du timer

function DemarrerTimer() {
    timer_lance = true;
    temps--;
    setInterval(diminuerTemps, 1000);
}

// prend en paramètres 2 entiers pour renvoyer l'affichage du temps
function affichageTimer(minutes, secondes) {
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (secondes < 10) {
        secondes = "0" + secondes;
    }

    timer.innerText = `${minutes} : ${secondes}`;

}

// réduit le temps du chrono et vérifie si il n'arrive pas à 0
function diminuerTemps() {

    minutes = parseInt(temps / 60, 10);
    secondes = temps % 60;

    if (temps <= 0) {
        ChangementActivite();
        temps--;
    } else {
        temps--;
        affichageTimer(minutes, secondes);
    }



}

//change du temps de pause au temps de travail et inversement
function ChangementActivite() {
    if (travail) {
        temps = tempsDePause * 60;
        activitee.innerText = "Pause";
        travail = false;
    } else {
        temps = tempsDeTravail * 60;
        activitee.innerText = "Travail";
        travail = true;
    }
    minutes = parseInt(temps / 60, 10);
    secondes = parseInt(temps % 60, 10);
    affichageTimer(minutes, secondes);
}

//recharge la page pour réinitialiser le timer
function redemarrer() {
    location.reload();
}