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
    if (localStorage.getItem('TT') != null) {
        tempsDeTravail = parseInt(localStorage.getItem('TT'));
        document.getElementById("tempTravail").value = tempsDeTravail;
        affichageTimer(tempsDeTravail, 0);
    }
    if (localStorage.getItem('TP') != null) {
        tempsDePause = parseInt(localStorage.getItem('TP'));
        document.getElementById("tempPause").value = tempsDePause;
    }

    //ecouteur du boutton
    boutonPlay.addEventListener("click", () => {
        temps = tempsDeTravail * 60;
        if (!timer_lancee) {
            temps--;
            minutes = parseInt(temps / 60, 10);
            secondes = parseInt(temps % 60, 10);
            affichageTimer(minutes, secondes);
            boutonPlay.innerHTML = `Redémarrer <em class="fa-solid fa-rotate-right" style="color: #35ca2b;"></em>`;
            timer_lancee = true;
            DemarrerTimer();
        } else {
            redemarrer();
        }

    });

}



// fonctions du timer

// lancement du timer 
function DemarrerTimer() {
    document.getElementById('tempTravail').disabled = true;
    document.getElementById('tempPause').disabled = true;
    temps--;
    setInterval(diminuerTemps, 1000);
}

// fonction d'affichage simple, prend en paramètres 2 entiers pour renvoyer l'affichage du temps
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

// sert à changer le temps de travail selon la valeur de l'utilisateur et l'enregistre en local pour reprendre avec ses préférences
function ChangerLeTemp() {

    //input du temps de travail
    document.getElementById("tempTravail").addEventListener("change", function () {
        //gestion d'erreurs
        if (this.value > 60) {
            tempsDeTravail = 60;
            this.value = 60;
        } else if (this.value < 1) {
            tempsDeTravail = 1;
            this.value = 1;
        } else {
            tempsDeTravail = Math.round(this.value);
            this.value = tempsDeTravail;
        }

        //enregistrement local et affichage
        localStorage.setItem('TT', tempsDeTravail);
        affichageTimer(tempsDeTravail, 0);
    })

    //input du temps de pause
    document.getElementById("tempPause").addEventListener("change", function () {
        //gestion d'erreurs
        if (this.value > 60) {
            tempsDePause = 60;
            this.value = 60;
        } else if (this.value < 1) {
            tempsDePause = 1;
            this.value = 1;
        } else {
            tempsDePause = Math.round(this.value);
            this.value = tempsDePause;
        }
        //enregistrement local
        localStorage.setItem('TP', tempsDePause);
    })
}

PageChargee();