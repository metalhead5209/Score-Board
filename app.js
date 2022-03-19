const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('#btn2');
const button3 = document.querySelector('#btn3');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const select = document.querySelector('#select');
let p1Score = 0;
let p2Score = 0;
let winningScore = select.value;
let isGameOver = false; 

button1.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('loser')
        }
    }p1Display.textContent = p1Score;
})


button2.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('loser');
            p2Display.classList.add('winner')
        }
    }p2Display.textContent = p2Score;
})

select.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    reset();
})

button3.addEventListener('click', reset);

function reset() {
    isGameOver = false; 
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('loser', 'winner');
    p2Display.classList.remove('loser', 'winner');

}








