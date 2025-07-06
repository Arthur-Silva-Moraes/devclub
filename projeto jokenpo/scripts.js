const pedra = document.querySelector('#pedra')
const papel = document.querySelector('#papel')
const tesoura = document.querySelector('#tesoura')
const result = document.querySelector('#random')
const suaPontuacao = document.querySelector('.sua-pontuacao')
const botPontuacao = document.querySelector('.bot-pontuacao')
const restart = document.querySelector('#restart')

let pontosHuman = 0
let pontosBot = 0

function reiniciar() {
    pontosHuman = 0
    pontosBot = 0
    suaPontuacao.innerHTML = 0
    botPontuacao.innerHTML = 0
    result.style.background = 'white'
    result.innerHTML = ''
}

function escolhas(escolha, numero) {
    if (escolha === numero) {
        alert('você empatou')
    } else if ((escolha == 1 && numero == 2) ||
        (escolha == 2 && numero == 3) ||
        (escolha == 3 && numero == 1)) {
        alert('Voce Perdeu')
        botPontuacao.innerHTML = pontosBot += 1
    }
    else {
        alert('parabens voce ganhou')
        suaPontuacao.innerHTML = pontosHuman += 1
    }
}


function randomnunber() {
    pedra.disabled = true
    papel.disabled = true
    tesoura.disabled = true
    restart.disabled = true
    restart.style.cursor = 'no-drop'

    let numero = Math.floor(Math.random() * 3) + 1
    if (numero == 1) {
        result.style.background = 'green'
        return (result.innerHTML = '&#x1F44A;', numero)
    } else if (numero == 2) {
        result.style.background = 'blue'
        return (result.innerHTML = '&#x1f590;', numero)
    } else if (numero == 3) {
        result.style.background = 'red'
        return (result.innerHTML = '&#x270c;', numero)
    }
}

function start(escolha) {
    let i = 0
    const imagens = setInterval(() => {
        const numero = randomnunber()

        i++
        if (i == 10) {
            clearInterval(imagens)
            pedra.disabled = false
            papel.disabled = false
            tesoura.disabled = false
            restart.disabled = false
            restart.style.cursor = 'pointer'

            setTimeout(() => escolhas(escolha, numero), 150)
        }
    }, 250);
}










const list = [
    { name: 'Rodolfo', vip: true },
    { name: 'Maria', vip: false },
    { name: 'João', vip: true },
    { name: 'Bruno', vip: true },
    { name: 'Carla', vip: false },
    { name: 'Ana', vip: true },
    { name: 'Julio', vip: false },
]

const list2 = list.map(user => {

    return {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    }
})

const students = [
    { name: 'Rodolfo', testGrade: 7 },
    { name: 'Maria', testGrade: 5 },
    { name: 'João', testGrade: 8 },
    { name: 'Bruno', testGrade: 9 },
    { name: 'Carla', testGrade: 3 },
    { name: 'Ana', testGrade: 2 },
    { name: 'Julio', testGrade: 10 },
]

const notas = students.map(values => {
    return {
        name: values.name,
        aprovated: values.testGrade < 5 ? 'Reprovado' : 'Aprovado'
    }
})


const values = [1, 2, 3, 4, 5, 6, 7]

const sum = values.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
}, -2)


const cart = [
    { productName: 'Abóbora', valuePerKg: 5, kg: 1 },
    { productName: 'Pepino', valuePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', valuePerKg: 1.2, kg: 2 },
    { productName: 'Abacate', valuePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', valuePerKg: 11.9, kg: 3 },
]

const value = cart.reduce((acumulator, valorAtual) => {
    const newvalor = valorAtual.valuePerKg * valorAtual.kg
    return acumulator + newvalor
}, 0)







const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const companiesValues = companies.map(valores => {
    valores.marketValue = (valores.marketValue + (valores.marketValue / 10))
    return valores
})
    .filter(company => company.foundedOn < 1990)
    .reduce((acumulator, values) => acumulator + values.marketValue, 0)

console.log(companiesValues)

const companies2 = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

const reduzirValores = (company) => {
    company.marketValue = ((company.marketValue - (company.marketValue * 10) / 100))

    return company
}


const filtrarEmpresas = company => company.foundedOn > 1980

const juntarValores = (acc, company) => acc + company.marketValue

const companiesReducedValues = companies2
    .map(reduzirValores)
    .filter(filtrarEmpresas)
    .reduce(juntarValores, 0)

console.log(companiesReducedValues)

// console.log(( 300 + (300 *50) /100))

console.log(soma(2, 3))
console.log(subtrai(5, 2))


function soma(a, b) {
    return a + b;
}

var subtrai = function (a, b) {
    return a - b
}
