//variables

let activitee = document.getElementById("activitee");
let travail = true;
let timer = document.getElementById("timer");

let tempsDePause = 5;
let tempsDeTravail = 25;

let temps = 25 * 0;
let minutes = parseInt(temps / 60, 10);
let secondes = parseInt(temps % 60, 10);

let boutonPlay = document.getElementById("BoutonDemarer");
let timer_lancee = false;

//fonction lancee au  chargement de la page
function PageChargee() {
    ChangerLeTemp();

    //ecouteur du boutton
    boutonPlay.addEventListener("click", () => {
        temps = tempsDeTravail * 60;
        if (!timer_lancee) {
            temps--;
            minutes = parseInt(temps / 60, 10);
            secondes = parseInt(temps % 60, 10);
            affichageTimer(minutes, secondes);
            boutonPlay.innerHTML = "Redémarrer";
            //ajouter <i class="fa-solid fa-rotate-right" style="color: #e60a0a;"></i>
            timer_lancee = true;
            DemarrerTimer();
        } else {
            redemarrer();
        }

    });

}



// fonctions du timer

function DemarrerTimer() {
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

// sert à changer le temps de travail selon la valeur de l'utilisateur
function ChangerLeTemp() {
    document.getElementById("tempTravail").addEventListener("change", function () {
        tempsDeTravail = this.value;
        affichageTimer(tempsDeTravail, 0);
    })
    document.getElementById("tempPause").addEventListener("change", function () {
        tempsDePause = this.value;
    })
}

PageChargee();