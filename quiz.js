function checkAnswer() {
    let correctAnswer = '4';
    let radios = document.querySelectorAll('input[name="quiz"]');
    let userAnswer;
    const feedback = document.getElementById("feedback");

    radios.forEach(radio => {
        if (radio.checked){
            userAnswer = radio.value;
        }
    });
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    }else {feedback.textContent = "That's incorrect. Try again!";}
    
}
const button = document.getElementById("submit-answer");
button.addEventListener('click', checkAnswer);