function clicar (){
    let n1= Number(window.prompt(`digite um numero`))
    let n2= Number(window.prompt('Digite outro numero'))
    let r = document.getElementById('r')
    r.innerHTML = `Analisando os valores ${n1} e ${n2}, `
    if(n1>n2){
        r.innerHTML+=` maior valor é ${n1}`
    }else if (n1<n2){
        r.innerHTML+=`o maior valor é ${n2}`
    } else{
        r.innerHTML+=`são iguais`
    }
}