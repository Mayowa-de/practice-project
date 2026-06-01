const displayNum = document.getElementById("display")
const incrementButton = document.getElementById("Incremental-button")
const decrementButton = document.getElementById("Decremental-button")
const inputValue = document.getElementById("input-number")
const setValue = document.getElementById("set-button")

let value=0;

incrementButton.addEventListener("click", IncreaseValue)

decrementButton.addEventListener("click", DecreaseValue)

function IncreaseValue(){
        value++
        displayNum.textContent = value
}
function DecreaseValue(){
        value--
        displayNum.textContent = value
}

setValue.addEventListener("click", setInitial )

function setInitial(){
    value = inputValue.value.trim();
    displayNum.textContent = value;
}
