const contacts = [
    {name: 'Rodolfo', number: '(19) 94343-3434'},
    {name: 'Paulo', number: '(29) 94343-1234'},
    {name: 'Aline', number: '(39) 94343-6215'},
    {name: 'Maria', number: '(49) 94343-9521'},
]

const botao = document.querySelector('button')
const p     = document.querySelector('p')

botao.addEventListener('click', procurarNumeroWhile)

function procurarNumero(){
    const nome = document.querySelector('input').value
    for(const contact of contacts){
        if(nome.toLocaleLowerCase() == contact.name.toLocaleLowerCase()){
            p.innerHTML =(contact['number'])   
            break
        }
        else{
            p.innerHTML = ('numero não encontrado')
        }
    }
}



function procurarNumeroWhile(){
    let i = 0
    while(i < contacts.length){
        const nome = document.querySelector('input').value
        if(contacts[i]['name'].toLocaleLowerCase() == nome.toLocaleLowerCase()){
            p.innerHTML= (contacts[i].number) 
            break
        }
        p.innerHTML= ('não encontramos nada') 
        i++
    }    
}


// function procurarNumeroForeach(){
//     const nome = document.querySelector('input').value 
//     contacts.forEach(item =>{
//         if(item.name.toLocaleLowerCase() == nome.toLocaleLowerCase()){
//             console.log(item.number)}
//         else{console.log('não encontrou')}

//     })
// }



// const myname = 'Arthur'
// const users = ['João', 'Maria']

// for (const letter of myname){
//      console.log(letter)
// }


const values = [10, 244, 99, 2, 20, 33, 250]

function somarValor(values){
    let valorFinal = 0 
    for (const value of values) {
    valorFinal += value        
    }
    return valorFinal
}

function valorDescontos(values){
    let valorFinal = 0
    for (let value of values) {
        value > 30 ? valorFinal += value*= 0.9 : valorFinal += value
    }
    return valorFinal
}

// console.log(somarValor(values))

const valorDescontos2 = values => {
    let valorFinal = 0
    for (let value of values) {
        value > 30 ? valorFinal += value*= 0.9 : valorFinal += value
    }
    return valorFinal
}

// console.log(valorDescontos2(values))

const number =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumber = number.map(item => item * 10)

// console.log(newNumber)

/*

const list = [
    {name: ' Rodolfo', vip: true},
    {name: ' Maria', vip: false},
    {name: ' João', vip: true},
    {name: ' Bruno', vip: true},
    {name: ' Carla', vip: false},
    {name: ' Ana', vip: true},
    {name: ' Julio', vip: false}
]

const areavip = list.map(value => value.vip? {name: value.name, vip: value.vip = 'verde'} : {name: value.name, vip: value.vip = 'vermelho'})

console.log (areavip)
*/


const students = [
    {name: 'Rodolfo', testGrade: 7},
    {name: 'Maria', testGrade: 5},
    {name: 'João', testGrade: 8},
    {name: 'Bruno', testGrade: 9},
    {name: 'Carla', testGrade: 3},
    {name: 'Ana', testGrade: 2},
    {name: 'Julio', testGrade: 10},
]

const studentsAproved = students.map(values => values.testGrade >= 5 ? {name:values.name, aprovado:true} : {name:values.name, aprovado:false})

// console.log(studentsAproved)



const cart = [
    {productName: 'Abóbora', valuePerKg: 5, kg:1},
    {productName: 'Pepino', valuePerKg: 3.55, kg:1.3},
    {productName: 'Limão', valuePerKg: 1.2, kg:2},
    {productName: 'Abacate', valuePerKg: 5.4, kg:1.67},
    {productName: 'Marango', valuePerKg: 11.9, kg:3},
]


const FinalValue = cart.reduce ((acc, value) => acc + (value.valuePerKg * value.kg),0)

// console.log(FinalValue)



const companies = [
    {name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938},
    {name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975},
    {name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968},
    {name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckeberg', foundedOn: 2004},
    {name: 'Spotify', marketValue: 30, CEO: 'Daniel EK', foundedOn: 2006},
    {name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976}
]

const newcompanie = companies.map(itens =>{
     itens.marketValue = (itens.marketValue *1.10).toFixed(2)
     return itens
}).filter(itens => itens.foundedOn >2000    
).reduce((value, itens) =>value += parseInt (itens.marketValue),0)

console.log(newcompanie)