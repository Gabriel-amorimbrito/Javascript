function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var diasem = data.getDay()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var texto = `Agora são ${hora} horas e ${minutos} minutos de `
    
       if(diasem == 0){
        texto += (`Domingo.`)
       }
       else if(diasem == 1){
        texto += (`Segunda-Feira.`)
       }
       else if(diasem == 2){
        texto += (`Terça-Feira.`)
       }
       else if(diasem == 3){
        texto += (`Quarta-Feira.`)
       }
       else if(diasem == 4){
        texto += (`Quinta-Feira.`)
       }
       else if(diasem == 5){
        texto += (`Sexta-Feira.`)
       }
       else if(diasem == 6){
        texto += (`Sábado.`)
       }
       msg.innerHTML = texto

        if (hora >= 0 && hora < 12){
        img.src = 'manha.png' //Bom dia
        document.body.style.background = '#e2cd9f'
        } 
        else if(hora >= 12 && hora <=18){
        img.src = 'tarde.png' //Boa tarde
        document.body.style.background = '#b9846f'
        } else{
        img.src = 'noite.png' //Boa noite
        document.body.style.background = '#515154'
        }
    
    
}


