function clicar(){
    let res = document.getElementById('res')
    let n = 10
    res.innerHTML+=`Contagem Regressiva de 10 a 1 <br>`
    while(n>=1){
        res.innerHTML+=`${n}; `
    n--}
}