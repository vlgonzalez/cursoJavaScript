function clicar(){
    let res = document.getElementById('res')
    let n1 = Number(document.getElementById('n1').value)
    let n2 = n1 -1
    res.innerHTML=`Calculando ${n1} ! <br>`
    res.innerHTML+=`${n1}x`
    while(n2>=1){
    res.innerHTML+=`${n2}x`
    n1 = n1 * n2
    n2--
    }res.innerHTML += `=${n1}`
}
   