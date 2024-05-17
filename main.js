let inputbox = document.getElementById('inputbox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (b) => {
        if (b.target.innerText == '=') {
            string = String(eval(string))
            inputbox.value = string;
        } else if (b.target.innerText == 'CE') {
            string = string.substring(0, string.length - 1)
            inputbox.value = string;
        } else if (b.target.innerText == 'DEL') {
            string = ''
            inputbox.value = string;
        } else if (b.target.innerText == 'C') {
            string = ''
            inputbox.value = string;
        } else if (b.target.innerText == '1/x') {
            string = String(1 / parseFloat(string))
            inputbox.value = string;
        } else if (b.target.innerText == 'x²') {
            string = String(Math.pow(parseFloat(string), 2))
            inputbox.value = string;
        } else if (b.target.innerText == '²√x') {
            string = String(Math.sqrt(parseFloat(string)))
            inputbox.value = string;
        } else {
            string += b.target.innerText
            inputbox.value = string;
        }
    })
})
