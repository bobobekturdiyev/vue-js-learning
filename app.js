const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addList(){
    const enteredValue = inputEl.value;
    const listItem = document.createElement("li");
    listItem.textContent = enteredValue;
    listEl.appendChild(listItem);
    inputEl.value = "";
}

buttonEl.addEventListener("click", addList);