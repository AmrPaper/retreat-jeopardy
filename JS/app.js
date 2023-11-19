let userScore = 0;
let questionValue = 0;

///const score = document.querySelector(".score");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const cls = document.querySelector(".cls");
const question = document.querySelectorAll(".question");
const btns = document.querySelectorAll(".btn");

const temp = () => {
    document.getElementById("questionInfo").innerHTML = `Question not found for the specified category and value.`;
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const modifyScore = (target) => {
    const targetStyle = target.currentTarget.classList;
    if (targetStyle.contains("add")) {
        userScore+=questionValue;
        console.log("Score:",userScore);
    } else if (targetStyle.contains("subtract")) {
        userScore-=questionValue;
        console.log("Score:",userScore);
    } else {
        console.log("Score:",userScore);
    };

};

const questionBox = (event) => {
    let currentCategory = event.currentTarget.dataset.category;
    let currentValue = event.currentTarget.dataset.value;
    questionValue = Number(currentValue);

    fetch("/Data/questions.json")
    .then(response => response.json())
    .then(data => {
        let currentQuestion = data[currentCategory][currentValue];
        if (currentQuestion) {
            document.getElementById("questionInfo").innerHTML = `
                <p>Question text: ${currentQuestion.text}</p>
                <p>Question ans: ${currentQuestion.answer}</p>
                <p>Question value: ${currentValue}</p>
                <p>Question category: ${currentCategory}</p>
            `;
            console.log(currentQuestion);
            modal.classList.remove("hidden");
            overlay.classList.remove("hidden");
        } else {
            console.error("Question not found for the specified category and value.");
        }
    })
    .catch(error => {
        console.log("error fetching data: ", error);
        temp();
    });
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

btns.forEach(item => {
    item.addEventListener("click", modifyScore);
})