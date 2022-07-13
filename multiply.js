const option1 = document.getElementById("option1"),
    option2 = document.getElementById("option2"),
    audio = document.getElementById("myAudio");
var answer = 0;

function generate_equation() {
    var num1 = Math.floor(Math.random() * 13),
        num2 = Math.floor(Math.random() * 13),
        dummyAnswer1 = Math.floor(Math.random() * 50),
        allAnswers = [],
        switchAnswers = [];

    answer = eval(num1 * num2);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

    allAnswers = [answer, dummyAnswer1];

    for (i = allAnswers.length; i--;) {
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1)[0]);
    };

    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];

};

option1.addEventListener("click", function() {
    if (option1.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
});

option2.addEventListener("click", function() {
    if (option2.innerHTML == answer) {
        generate_equation();
    } else {
        audio.play();
    }
});


generate_equation()