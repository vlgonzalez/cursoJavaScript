function clicar(){
    let res = document.getElementById('res')
    let n1 = Number(document.getElementById('n1').value)
    let n2 = 1
    res.innerHTML=`Tabuada do numero ${n1} <br>`
    while(n2<=10){
    let n3 = n1 * n2
    res.innerHTML+= `${n1} x ${n2} =${n3} <br>`
    n2++}
}