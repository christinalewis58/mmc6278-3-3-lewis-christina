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
            var question = questionsArr[i].question
            var answer = window.confirm(questionsArr[i].question)
            
            if (answer === questionsArr[i].answer) {
                correct++
                }
        
            }


        var score = (Math.round(correct/questionsArr.length * 100))

        alert("You got a " + score + "%")
        
          
        
    }
