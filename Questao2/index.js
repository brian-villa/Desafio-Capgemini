const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const especialCarac = "!@#$%^&*()-+"

const getLowerCase = () =>  {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)]
}

const getUpperCase = () => {
    return upperCase[Math.floor(Math.random() * upperCase.length)]
}

const getNumbers = () => {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

const getEspecialCarac = () => {
    return especialCarac[Math.floor(Math.random() * especialCarac.length)]
}

const passwordGen = () => {

    let password = Math.random().toString(36).slice(-2)
    
    for(i = 0; i < 1; i++) {
        
        password += getUpperCase() + getEspecialCarac() + getLowerCase() + getNumbers()
        
    }
    
    console.log(`O minímo de caracteres necessário para uma senha segura é ${password.length}`)
    console.log(`Sugestão de senha mínima com ${password.length} caracteres é: ${password}`)
}


const inputPassword = document.querySelector("#password")
const Abutton = document.querySelector("#button")
let textArea = document.querySelector("#text")


const ContadordeCarac = (e) => {
    e.preventDefault()

    if(inputPassword.value.length < 6) {

        let resto = 6 - inputPassword.value.length

        textArea.innerHTML += `<p>Você digitou ${inputPassword.value.length} caracteres faltam ${resto} caracteres para ter uma senha segura</p>` 
    }

    passwordGen()
    inputPassword.value = ""
}

Abutton.addEventListener('click', ContadordeCarac)



