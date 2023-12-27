let number_1 = document.getElementById("num_1")
let number_2 = document.getElementById("num_2")

let dab_1 = 8
let dab_2 = 2

let final_1 = number_1.textContent = dab_1
let final_2 = number_2.textContent = dab_2

function add() {
    let rain = final_1 + final_2
    document.getElementById("result").textContent = rain
}
function multiply() {
    let rain = final_1 * final_2
    document.getElementById("result").textContent = rain
}
function subtract() {
    let rain = final_1 - final_2
    document.getElementById("result").textContent = rain
}
function divide() {
    let rain = final_1 / final_2
    document.getElementById("result").textContent = rain
}
