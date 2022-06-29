function clicar(){
    let res = document.getElementById('res')
    let n1 = Number(document.getElementById('n1').value)
    let n2 = 0
    res.innerHTML+=`Contando de 0 até ${n1}! <br>`
    while(n2<=n1){
    res.innerHTML+=`${n2}; `
    n2++}
}