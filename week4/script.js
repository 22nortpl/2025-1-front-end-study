let root = document.getElementById("root");
let button = document.getElementById("call");

function render(data) {
    for (let i = 0; i < data.length; i++) {
        let h2Tag = document.createElement("h2");
        h2Tag.textContent = data[i].name;
        root.appendChild(h2Tag);
    }
}

function onButtonClick()
{
    console.log("버튼 클릭!");
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
    .then((response) => response.json())
    .then((json) => render(json));
}

button.addEventListener("click", onButtonClick);