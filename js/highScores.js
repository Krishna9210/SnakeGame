const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("hiscore")) || [];
highScoresList.innerHTML = highScores;
