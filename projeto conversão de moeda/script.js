const url2 = ('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,USD-EUR')
const converterDe = document.getElementById('first-country')

const botao = document.querySelector('button')

function converterDinheiro() {

    const converterPara = document.getElementById('secound-country').value
    const inicialMoney = document.getElementById('valor-real')
    const alterarNumero = document.querySelector('.real-box')
    const valorFinal = document.querySelector('.resultado-valor')

    if (converterDe.value == "BRL") {
        alterarNumero.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inicialMoney.value)
    }
    if (converterDe.value == "USD") {
        alterarNumero.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inicialMoney.value)
    }
    if (converterDe.value == "EUR") {
        alterarNumero.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inicialMoney.value)
    }



    fetch(url2).then(response => response.json()).then(data => {
        inicialMoney.style.display = 'block'
        const valorRealDolar = data.USDBRL.high;
        const valorRealEuro = data.EURBRL.high;
        const valorDolarEuro = data.USDEUR.high;
        botao.disabled = false
        if (converterPara == converterDe.value) {
            botao.disabled = true
            botao.style.cursor = 'no-drop'
        }
        else {


            if (converterPara == 'USD' && converterDe.value == "BRL") {
                valorFinal.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(inicialMoney.value / valorRealDolar)
            }

            if (converterPara == 'EUR' && converterDe.value == "BRL") {
                valorFinal.innerHTML = new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                }).format(inicialMoney.value / valorRealEuro)
            }

            if (converterPara == 'BRL' && converterDe.value == "USD") {
                valorFinal.innerHTML = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(inicialMoney.value * valorRealDolar)
            }

            if (converterPara == 'BRL' && converterDe.value == "EUR") {
                valorFinal.innerHTML = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(inicialMoney.value * valorRealEuro)
            }

            if (converterPara == 'USD' && converterDe.value == "EUR") {
                valorFinal.innerHTML = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(inicialMoney.value / valorDolarEuro)
            }

            if (converterPara == 'EUR' && converterDe.value == "USD") {
                valorFinal.innerHTML = new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(inicialMoney.value * valorDolarEuro)
            }
        }

    })
}

converterDinheiro()






function mudarpais() {
    const nomeMoedaInicial = document.querySelector('.nome-moeda-inicial')
    const mudarimg2 = document.querySelector('.pais1')

    const nomeMoeda = document.querySelector('.nome-moeda')
    const mudarimg = document.querySelector('.pais2')

    botao.style.cursor = 'pointer'

    if (converterPara.value == 'EUR') {
        nomeMoeda.innerHTML = 'Euro'
        mudarimg.src = 'img/bandeira Europa.png'
    }
    if (converterPara.value == 'USD') {
        nomeMoeda.innerHTML = 'Dólar Americano'
        mudarimg.src = 'img/bandeira EUA.png'
    }
    if (converterPara.value == 'BRL') {
        nomeMoeda.innerHTML = 'Real'
        mudarimg.src = 'img/bandeira Brasil.png'
    }


    if (converterDe.value == 'EUR') {
        nomeMoedaInicial.innerHTML = 'Euro'
        mudarimg2.src = 'img/bandeira Europa.png'
    }
    if (converterDe.value == 'USD') {
        nomeMoedaInicial.innerHTML = 'Dólar Americano'
        mudarimg2.src = 'img/bandeira EUA.png'
    }
    if (converterDe.value == 'BRL') {
        nomeMoedaInicial.innerHTML = 'Real'
        mudarimg2.src = 'img/bandeira Brasil.png'
    }
    converterDinheiro()


}
const converterPara = document.getElementById('secound-country')
converterPara.addEventListener('change', mudarpais)
converterDe.addEventListener('change', mudarpais)

