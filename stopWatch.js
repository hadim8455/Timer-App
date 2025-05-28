var timer = document.getElementById("timer");
var startBtn = document.getElementById("startBtn")
var stopBtn = document.getElementById("stopBtn")
var resetBtn = document.getElementById("resetBtn")

var interval;

function timeStart(){
    var enterTime = prompt("Enter Time")
    enterTime = parseInt(enterTime)
    
    if(isNaN(enterTime) || enterTime <= 0) {
        alert("Enter a Valid Number")
        timer.innerHTML = 0
        return;
    }

        timer.innerHTML = enterTime
        startBtn.disabled = true
    
        interval = setInterval(function(){
            enterTime--
            timer.innerHTML = enterTime

            if(enterTime <= 0){
                clearInterval(interval)
            }
            }, 1000)
    
    }   
    

function startTimer(){
    timeStart()
}
function stopTimer(){
    clearInterval(interval)
    console.log("Stop")
    startBtn.disabled = false

}
function resetTimer(){
    clearInterval(interval)
    timer.innerHTML = 0
    startBtn.disabled = false
     
}


function timerWatch(){
    window.location.href = "./index.html"
}




