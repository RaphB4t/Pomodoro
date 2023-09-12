const activitee = document.getElementById("activitee");
const timerElement = document.getElementById("timer");
const depart = 25;
let temps = 25*60-1;
setInterval(diminuerTemps, 1000);

function diminuerTemps(){
    let minutes = parseInt(temps / 60, 10);
    let secondes = parseInt(temps % 60, 10);

    if (minutes<10){
        minutes = "0"+minutes;
    }
    if (secondes<10){
        secondes = "0"+secondes;
    }

    if(temps <= 0){
        temps = 5*60+1;
        activitee.innerText = "Pause";
    }

    timerElement.innerText= `${minutes} : ${secondes}`;
    temps--;
}