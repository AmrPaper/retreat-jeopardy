fetch("/Data/questions.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("questionInfo").innerHTML = `
        <p>Question text: ${data.text}</p>
        <p>Question ans: ${data.ans}</p>
        <p>Question value: ${data.value}</p>
        <p>Question category: ${data.category}</p>
        `;
    })
    .catch(error => console.log("error fetching data: ", error));

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const cls = document.querySelector(".cls");
const question = document.querySelectorAll(".question");

const questionBox = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const back = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

question.forEach(questionElement => {
    questionElement.addEventListener("click", questionBox);
});
overlay.addEventListener("click", back);
cls.addEventListener("click", back);

