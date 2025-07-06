const salada = document.querySelector('#x-salada')
const bacon = document.querySelector('#x-bacon')
const baconEgg = document.querySelector('#x-bacon-egg')
const monstruoso = document.querySelector('#monstruoso')
const bigVegano = document.querySelector('#big-vegano')
const sumSnacks = document.querySelector('.resultado-lanches')
const Vegan = document.querySelector('#x-vegan')
const visualizarEscolhas = document.querySelector('.escolhas')
const precos = document.querySelectorAll('.prices')
const precoFinal = document.querySelector('.preco-final')
const botaoDesconto = document.querySelector('.descount')


const lanches = Array.from(document.querySelectorAll('.lanches'))

function showOptions() {
    const estilo = window.getComputedStyle(visualizarEscolhas).display
    if (estilo == 'flex') {
        visualizarEscolhas.style.display = 'none'
    } else { visualizarEscolhas.style.display = 'flex' }
}

function hiddenOptions() {
    lanches.filter(valorAtual => {
        valorAtual.style.display = 'none'
    })
}

function showall() {
    lanches.filter(valorAtual => {
        valorAtual.style.display = 'block'
        valorAtual.style.visibility = 'visible'
        sumSnacks.style.display = 'none'
    })
}



function showSnacks() {
    const checkboxes = [salada.checked, bacon.checked, baconEgg.checked, monstruoso.checked, bigVegano.checked, Vegan.checked]
    lanches.filter((valorAtual, i) => {
        sumSnacks.style.display = 'none'
        if (checkboxes[i] == false) {
            valorAtual.style.display = 'none'
            valorAtual.style.visibility = 'hidden'
        } else {
            valorAtual.style.display = 'block'
            valorAtual.style.visibility = 'visible'
        }
    })
}

const values = Array.from(precos).map(span => {
    return span.textContent
}
)

function descount() {
    Array.from(precos).map((element, index) => {
        defaultvalue = [30.00, 34.90, 30.00, 50.00, 55.00, 45.00]
        const values = parseFloat(element.textContent)
        if (botaoDesconto.innerHTML === 'Desconto') {
            element.textContent = (values - (values * 10) / 100).toFixed(2)
            setTimeout(() => {
                botaoDesconto.innerHTML = 'tirar desconto'
            }, 50);
        }
        if (botaoDesconto.innerHTML === 'tirar desconto') {
            element.textContent = defaultvalue[index].toFixed(2)
            setTimeout(() => {
                botaoDesconto.innerHTML = 'Desconto'
            }, 50);
        }

    })

}


function totalValue() {
    const resultadoFinal = Array.from(precos).reduce((acc, products, i) => {
        const estilo = window.getComputedStyle(products).visibility
        console.log(estilo)

        if (estilo == 'visible') {
            acc += parseFloat(products.textContent)
        }
        return acc
    }, 0)
    hiddenOptions()
    sumSnacks.style.display = 'block'
    precoFinal.textContent = resultadoFinal
}
