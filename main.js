// select parent keys
const keyButton = document.querySelector('.digits')
keyButton.addEventListener('click', getDigits)

const screen = document.querySelector('.calculator-screen')

//target the keys and dsplay on the screen
function getDigits() {
    // using closest to make sure the program runs only if button are
    //clicked

    if(!event.target.closest('button')) return
    
    const key = event.target
    const keyValue = key.textContent

    // get the number of the values to show in the caculator screen on click
    // a variable is created outside this function.(the variable needs to be overwritten by the numbers or operators we click)
    const screenValue = screen.textContent
    screen.textContent = keyValue
}