let num = document.getElementById('tnum')
let slc = document.getElementById('tselec')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n,l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
    
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        slc.appendChild(item)
        //res.innerHTML += '' 
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
        num.value = ''
        num.focus()
}

function Finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma  = 0
        let media = 0 

        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
 }      media = soma/total
        res.innerHTML += ``
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}. </p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}. </p>`
        res.innerHTML += `<p>A média dos números somados é ${media}. </p>`
        let fimm = document.getElementById('fim')
        document.getElementById("fim").disabled = true
    }
    let adic = document.getElementById('adi')
    document.getElementById("adi").disabled = true
    
}

function reiniciar(){
    location.reload()
}

