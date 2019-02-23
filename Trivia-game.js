$( document ).ready(function() {

    timer();

    var answer1 = true
    var answer2 = false
    var answer3 = false
    var userSelection1 
    var userSelection2
    var userSelection3

    var intervalId;
    var clockRunning = false;
    var time = 1;
    // make ".on('click",) events for all the buttons 
       $('#true1').on("click", answerTrue1)
       $('#false1').on("click", answerFalse1)
       $('#true2').on("click", answerTrue2)
       $('#false2').on("click", answerFalse2)
       $('#true3').on("click", answerTrue3)
       $('#false3').on("click", answerFalse3)
    // make a function for each button to = true or false to be called by the clicks 
       function answerTrue1() {
        userSelection1 = true
       }
       function answerFalse1() {
        userSelection1 = false
       }
       function answerTrue2() {
        userSelection2 = true
       }
       function answerFalse2() {
        userSelection2 = false
       }
       function answerTrue3() {
        userSelection3 = true
       }
       function answerFalse3() {
        userSelection3 = false
       }
       $('#submitButton').on("click", checkAnswers)

            function checkAnswers() {
       if (userSelection1 === answer1 && userSelection2 === answer2 && userSelection3 === answer3) {
           alert("You're a genius!")
       } else {
           alert("You lost :( refresh to try again!")
       }
    };   

    
    // make a timer that starts when the player loads the page.
     function timer() {
        $("#start").on("click", start);
        $("#submit").on("click", stop);
        }
     function start() {
        if (!clockRunning) {
          intervalId = setInterval(count, 1000);
          clockRunning = true;
            };
        }
        function stop() {
            if (clockRunning) {
              clearInterval(intervalId);
              clockRunning = false;
            };
          };
          function count() {
            time--
            var converted = timeConverter(time);
            $('#display').text(converted);
          }
          function timeConverter(t) {

            var minutes = Math.floor(t / 60);
            var seconds = t - (minutes * 60);
          
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
          
            if (minutes === 0) {
              minutes = "00";
            }
          
            else if (minutes < 10) {
              minutes = "0" + minutes;
            }
          
            return minutes + ":" + seconds;
          }
 });
  
