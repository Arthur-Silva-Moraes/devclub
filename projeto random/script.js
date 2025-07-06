const button = document.getElementById('button')
const randomNumber = document.querySelector('.random-number')




function numeros(){
    const number1 = parseInt(document.getElementById('number1').value)
    const number2 = parseInt(document.getElementById('number2').value)
    const numberresult = (Math.floor(Math.random() * number2 ) + number1)
    
    // if(number1 >= number2){
    //     alert('o primeiro numero não pode ser maior ou igual que o segundo numero')
    // }else{
    //     const numberresult = (Math.floor(Math.random() * number2 ) + number1)
    //     randomNumber.innerHTML = numberresult
    // }

    number1 >=number2 ? alert('o primeiro numero não pode ser maior ou igual que o segundo numero') : randomNumber.innerHTML = numberresult
}

button.addEventListener('click', numeros)