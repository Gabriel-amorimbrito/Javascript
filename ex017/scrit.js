function gerar(){
    let num = document.getElementById('tnum')
    let res = document.getElementById('res')
    let tab = document.getElementById('stab')
    if(num.value.length == 0){
        window.alert('Digite um número')
    }else{
       let n = Number(num.value)
       let x = Number.value
       
       tab.innerHTML = ''
       
       for(let x = 1; x <= 10; x++){
        let item = document.createElement('option')
        item.text = `${n} * ${x} = ${n*x} \u{2714}`
        //item.value = `tab${c}`
        tab.appendChild(item) 
       }
    }
    
        
}


/*res.innerHTML = ('<br>Resultado: <br><br>')
       let n = Number(num.value)
       let x = Number.value
       for(let x = 1; x <= 10; x++){
        res.innerHTML += `${n} * ${x} = ${n*x} \u{2714}<br><br>` 
       } Comando para caso a tabuada fosse criada fora do select*/ 