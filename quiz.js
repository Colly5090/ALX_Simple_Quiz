function checkAnswer() {
    let correctAnswer = '4';
    let userAnswer;
    let checkedRadio = document.querySelector('input[name="quiz"]');

    if (checkedRadio.checked){
        userAnswer = checkedRadio.value;
    }
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}
const button = document.getElementById("submit-answer");
button.addEventListener('click', checkAnswer);