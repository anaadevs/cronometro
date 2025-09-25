const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const miliseconds = document.querySelector("#miliseconds");
const startBtn = document.querySelector("#startBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let min = 0;
let seg = 0;
let mlseg = 0;
let isPause = false;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

function startTimer(){
    interval = setInterval(() => {
        if(!isPause){
            mlseg += 10;
            
            if(mlseg === 1000){
                seg++;
                mlseg = 0;
            }

            if(seg === 60){
                min++;
                seg = 0;
            }

            minutes.textContent = formatTime(min);
            seconds.textContent = formatTime(seg);
            miliseconds.textContent = formatMilis(mlseg);
        }
    },10)

    startBtn.style.display = "none";
    pauseBtn.style.display = "block";
}

function pauseTimer(){
    isPause = true;
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "block";
}

function resumeTimer(){
    isPause = false;
    pauseBtn.style.display = "block";
    resumeBtn.style.display = "none";
}

function resetTimer(){
    clearInterval(interval);
    min = 0;
    seg = 0;
    mlseg = 0;

    isPause = false;

    minutes.textContent = "00";
    seconds.textContent = "00";
    miliseconds.textContent = "000";

    startBtn.style.display = "block";    
    pauseBtn.style.display = "none";
    resumeBtn.style.display = "none";
}


function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

function formatMilis(time){
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}

