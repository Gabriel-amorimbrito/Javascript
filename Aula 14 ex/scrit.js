function contar(){
    let ini= document.getElementById("tini")
    let fim = document.getElementById("tfim")
    let passo = document.getElementById("tpas")
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // length: comprimento, esse comando serve para verificar se o valor existe valor na caixa.
      window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>' //Esse <br> serve para pular linha no HTML
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
          window.alert('Passo inválido! Considerando PASSO = 1')
          p = 1
        }
        if(i < f){
        //contagem crescente
        for(let c = i ; c <= f ; c += p){
          res.innerHTML += ` ${c} \u{1F449}` //modelo de aplicação de emoji em JS, site(unicode emoji list)
        }
      } else{
        //contagem decrescente
      } for(let c = i ; c >= f ; c -= p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
        res.innerHTML += `\u{1F3C1}`
        let imagem = document.getElementById('img')
      
        
    }
}
