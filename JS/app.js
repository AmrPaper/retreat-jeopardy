fetch("/Data/questions.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("questionInfo").innerHTML = `
        <p>Question text: ${data.text}</p>
        <p>Question ans: ${data.ans}</p>
        <p>Question value: ${data.value}</p>
        `;
    })
    .catch(error => console.log("error fetching data: ", error));