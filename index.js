var questionsArr = [
    {
    question: 'The sky is blue',
    answer: true
    },

    {
    question: 'The grass is green',
    answer: true
    },

    {
    question: 'Birds can swim',
    answer: false
    },

    {
    question: 'Dogs are not cute',
    answer: false
    },

    {
    question: 'A foot is twelve inches',
    answer: true
    }
    ];

    function runQuiz() {

 
        var correct = 0
        for(let i = 0; i < questionsArr.length; i++) {
           
            var question = questionsArr[question]
            var answer = window.confirm(questionsArr)
            
                if (answer) {
                    correct++
                }
            var score = (Math.round(correct/questionsArr.length * 100))

            } if(correct>= 5) {
                alert("You got a 100%")
            }  if(correct=0) {
                alert("You got a 0%")
            } else {
                alert("You got a " + score + "%")
            }
    }
