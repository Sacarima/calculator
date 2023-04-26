// select parent keys
const keyButton = document.querySelector('.digits')
keyButton.addEventListener('click', getDigits)

const screen = document.querySelector('.calculator-screen')

//target the keys and dsplay on the screen
function getDigits() {
    // using closest to make sure the program runs only if buttons are
    //clicked

    if(!event.target.closest('button')) return
    
    const key = event.target
    const keyValue = key.textContent

    // get the number of the values to show in the caculator screen on click
    // a variable is created outside this function.(the variable needs to be overwritten by the numbers or operators we click)
    const screenValue = screen.textContent
    screen.textContent = keyValue

    // at this point numbers appear when click, but its replaced when another number or operator is clicked. no change this behavior the following is needed
    if(screenValue === '0') /*we check for string 0 '0'*/{
        screen.textContent = keyValue
    }else {
        screen.textContent = screenValue + keyValue
    }

    /*this part will omit the operator from being displayed on the screen
    if it's an operator it's treated differently, the same if it's a number should be treared differently
    */
}
