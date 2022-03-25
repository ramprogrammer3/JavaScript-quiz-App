

var getQuiz = document.getElementById("quiz")
var correctAnswer = [];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
        var result = JSON.parse(this.responseText);
        // console.log(result);
        for (let i = 0; i < result.length; i++){
            correctAnswer.push(result[i].answer)
            // console.log(result[i].question);
            getQuiz.innerHTML += `<h2>${result[i].question}</h2> `;

            var options = result[i].options;
            
            for (let j = 0; j < options.length; j++){
                getQuiz.innerHTML += `
                    <label>
                    <input type = "radio" name = "q${result[i].id}"  value = "${j + 1}">
                    <span>${options[j]}</span>
                    </label> <br/>   
                `;
            }
            getQuiz.innerHTML += `<div class="line"></div>`;
        }
        // console.log(correctAnswer);
    }
}
xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true);
xhttp.send();



function checkResult() {
    var givenans = [];
    // var getRadios = document.getElementsByTagName('input');
    // for (var i = 0; i < getRadios.length; i++){
    //     if (getRadios[i].type === 'radio' && getRadios[i].checked) {
    //         values.push += getRadios[i].value;
    //     }
    // }
    var checkedInput = $("input[type=radio]:checked");
    for (var i = 0; i < checkedInput.length; i++){
        givenans.push(checkedInput[i].value);
    }
    var getScore = document.getElementById('score');
    var score = 0

    for (var j = 0; j < correctAnswer.length; j++){
        if (givenans[j] == correctAnswer[j]) {
            score++;
        }
    }
    getScore.innerHTML = score;
    // console.log(score);
}