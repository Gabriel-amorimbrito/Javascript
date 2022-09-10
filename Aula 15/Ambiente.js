let num = [1 , 9, 18, 45, 23, 3, 5, 10]
num.sort(function(a,b){
    return b-a
}
    
)

//console.log(`O vetor é ${num.length }`)
//console.log(num)
//console.log(num.length)
/*for(let x = 0; x < num.length; x ++){
        console.log(`A posição ${x} tem o valor ${num[x]}`)
        
    }
    */
   /*let z = num.indexOf(9)
    if(z == -1){
        console.log('Número não encontrado ou valor inexistente')
    } else{
        console.log(`O número está na posição ${z}`)
    }
    
    */
    for(let z in num){
        console.log(num[z])
    }
