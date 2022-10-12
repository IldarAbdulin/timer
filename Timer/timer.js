// let value = 0;
// let timerId;

// function tick() {
//     value++;
//     document.querySelector('#output').textContent = value;
// }
// function resetValue() {
//     value = 0;
// }
// let startBtn = document.querySelector('#startBtn').addEventListener('click' , function() {
//     if(!timerId) {
//         timerId = setInterval(tick, 1000)
//     }
// })

// let stopBtn = document.querySelector('#stopBtn').addEventListener('click' , function() {
//     if(timerId) {
//         clearInterval(timerId);
//         timerId = null;
//     }
// })
// let resetBtn = document.querySelector('#resetBtn').addEventListener('click' , function() {
//     resetValue()
// })


let value = 0
function plus() {
    value++;
    document.querySelector('#output').textContent = value
}
function minus() {
    value--;
    document.querySelector('#output').textContent = value
}
function reset() {
    value = 0
    document.querySelector('#output').textContent = value
}
let plusValue = document.querySelector('#plus').addEventListener('click' , () => {
    plus()
})
let minusValue = document.querySelector('#minus').addEventListener('click', () => {
    if(value <= 0) {
        value = 0
        alert('Ниже чем 0 нельзя')
    }else{
        minus()
    }
})
let resetBtn = document.querySelector('#reset').addEventListener('click' , () => {
    reset()
})