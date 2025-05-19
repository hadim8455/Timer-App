
function startCountDown(){
    var count = 10;
    var timer = document.getElementById("timer")
    
    var myInterval = setInterval(function(){
        timer.innerHTML = count 
        count = count -1

        if(count < 0){
            clearInterval(myInterval)
            timer.innerHTML = "Time's Up"
        }

    }, 1000)



}


