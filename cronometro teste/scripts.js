let number = 1
const start = document.querySelector('.iniciar')
const parar = document.querySelector('.parar')
let cronometro

let h1 = document.querySelector('h1')

function starttimer(){
    cronometro = setInterval(function(){
        h1.innerHTML = number++
    },1000)
}

function stoptimer(){
    clearInterval(cronometro)
}


start.addEventListener('click',starttimer)
parar.addEventListener('click', stoptimer)
