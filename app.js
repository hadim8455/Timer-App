var minHeading = document.getElementById("minHeading")
var secHeading = document.getElementById("secHeading")
var msecHeading = document.getElementById("msecHeading")

var startBtn = document.getElementById("startBtn")

var min = 0 
var sec = 0
var msec = 0


function timer(){
    msec++
    msecHeading.innerHTML = msec
    
    if(msec === 100){
        msec = 0
        sec++
        secHeading.innerHTML = sec
    }
    if(sec > 59){
        sec = 0
        min++
        minHeading.innerHTML = min
    }
}

var interval;
function startTimer(){
    interval = setInterval(timer, 10)
    console.log("1 Min Complete")
    startBtn.disabled = true
}
function stopTimer(){
    clearInterval(interval)
    startBtn.disabled = false
    console.log("Press Stop")

}

function resetTimer(){
    clearInterval(interval)
    min = 0
    sec = 0
    msec = 0
    minHeading.innerHTML = 0
    secHeading.innerHTML = 0
    msecHeading.innerHTML = 0
    
    console.log("Press Reset")
} 
function stopWatch(){
    window.location.href = "./stopWatch.html"

}



















// function startBtn()(){
//     var count = 10;
//     var timer = document.getElementById("starTimer")
    
//     var myInterval = setInterval(function(){
//         timer.innerHTML = count 
//         count = count -1

//         if(count < 0){
//             clearInterval(myInterval)
//             timer.innerHTML = "Time's Up"
//         }

//     }, 1000)



// }


