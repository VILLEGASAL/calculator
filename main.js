
let inpField = document.querySelector('#inp-field')
let btns = document.querySelector('.__btns-container')
let equation = ""

btns.addEventListener('click', (event) => {

    switch (event.target.innerText) {
        case "0":
            equation += event.target.innerText
            inpField.value = equation
            break;
        
        case "1":
            equation += event.target.innerText
            inpField.value = equation
            break;
        
        case "2":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "3":
            equation += event.target.innerText
            inpField.value = equation
            break;
    
        case "4":
            equation += event.target.innerText
            inpField.value = equation
            break;
            
        case "5":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "6":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "7":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "8":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "9":
            equation += event.target.innerText
            inpField.value = equation
            break;
        
        case "+":
            equation += event.target.innerText
            inpField.value = equation
            break;
            
        case "-":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "/":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "X":
            equation += "*"
            inpField.value = equation
            break;

        case ".":
            equation += event.target.innerText
            inpField.value = equation
            break;

        case "=":{

            equation = ""
            inpField.value = eval(inpField.value).toFixed(2).toLocaleString()
            equation += inpField.value
            break;
        }

        case "RESET":
            equation = ""
            inpField.value = equation
            break;

        case "DEL":
            equation = equation.slice(0, -1)
            inpField.value = equation
            break;

        default:
            break;
    }
})