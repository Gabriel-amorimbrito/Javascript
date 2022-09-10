function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Como criar uma tag paraimg pelo JS sem utilizar o CSS
        img.setAttribute('id', 'foto') // Como adicionar um 'id' para uma img pelo JS.
        if(fsex[0].checked){
            if (idade>= 0 && idade <=3){
                genero = 'um bebê'
                img.setAttribute('src', 'bebe-menino.png')//bebe m
            } else if (idade<10){
                genero = 'uma criança'
                img.setAttribute('src', 'menino.png')//criança m
            } else if (idade<18){
                genero = 'um adolescente'
                img.setAttribute('src', 'adolescente homem.png')//adolescente m
            } else if (idade<45){
                genero = 'um homem'
                img.setAttribute('src', 'homem.png')//homem
            } else if(idade<65){
                genero = 'um senhor'
                img.setAttribute('src', 'senhor.png')//senhor
            } else{
                genero = 'um idoso'
                img.setAttribute('src', 'idoso.png')// idoso
            }
        } else if (fsex[1].checked){
            if (idade>= 0 && idade <=3){
                genero = 'um bebê'
                img.setAttribute('src', 'bebe-menina.png')//bebe f
            } else if (idade<10){
                genero = 'uma criança'
                img.setAttribute('src', 'menina.png')//criança f
            } else if (idade<18){
                genero = 'uma adolescente'
                img.setAttribute('src', 'adolescente mulher.png')//adolescente f
            } else if (idade<45){
                genero = 'uma mulher'
                img.setAttribute('src', 'mulher.png')//mulher
            } else if (idade<65){
                genero = 'uma senhora'
                img.setAttribute('src', 'senhora.png')//senhora
            } else{
                genero = 'uma idosa'
                img.setAttribute('src', 'idosa.png')//idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild (img)
        
    }
}
//document.body.style.background = 'red' Como alterar a cor do fundo do site pelo JS