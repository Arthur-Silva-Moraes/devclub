const element = document.getElementById('teste1')

const novotexto = 'novo texto' 

element.placeholder = `agora é ${novotexto}`


function cliqueiNoBotao(){
    const texto = document.querySelector('#teste1')
    const adicionarTexto = document.querySelector('.adicionar-texto')
    adicionarTexto.textContent = texto.value
    adicionarTexto.style.color = "red"
    adicionarTexto.style.backgroundColor = 'Black'
    texto.value = ''
}