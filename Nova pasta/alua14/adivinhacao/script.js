var res = document.getElementById('res')
var ale = ''

function carregar (){ 
var n2 = Math.random()
ale = Math.trunc(n2*99)
}

function clicar (){
    let n1 = Number(window.prompt('Qual é o seu palpite'))
       
    if (ale < n1){  
        res.innerHTML+=`Voce falou ${n1}. O meu numero é menor <br>`
    }
    else if(ale > n1) {
        res.innerHTML+=`Voce falou ${n1}. O meu numero é maior <br>`
        
    } else{
        res.innerHTML+= `PARABÉNS! Você acertou! Eu tinha sorteado o valor ${ale} <br>` 
    }
}