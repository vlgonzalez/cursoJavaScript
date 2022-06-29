function clicar (){
    let res = document.getElementById('res')
    let n1= Number(window.prompt('digite um numero'))
    let n2=Number(window.prompt('digite o segundo valor'))
    let n3=Number(window.prompt(`Os valores invermados foram ${n1} e ${n2},\n O que devo fazer com eles? \n [1] Somar \n[2] Subitrair \n [3] Multiplicar \n [4] Dividir`))
     if(n3==0 || n3>=5){
        res.innerHTML= `Opção invalidade vc digitou ${n1} e ${n2} , mas não sei o que fazer com eles  `
    
    }else if(n3==1){
        let s = n1+n2
        res.innerHTML=`Calculando <br> ${n1} + ${n2} = ${s}`}
    
     else if (n3==2){
        let sub = n1-n2
        res.innerHTML=`Calculando <br> ${n1} - ${n2} = ${sub}`
    } else if (n3==3){
        let mult = n1*n2
        res.innerHTML=`Calculando <br> ${n1} x ${n2} = ${mult}`
    } else if (n3==4){
        let div = n1/n2
        res.innerHTML=`Calculando <br> ${n1} / ${n2} = ${div}`
    }
}
