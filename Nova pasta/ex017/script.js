function multiplicar (){
    let n1 = document.getElementById('n1')
    let res = document.getElementById ('res')
    if (n1.value.length ==0){
        window.alert('digite um numero')}
        else{
            res.innerHTML='calculando o resultado <br>'
            n = Number(n1.value)
            c= 1
            for(m=n ; c <= 10; c++)
           res.innerHTML += ` ${m} x ${c} = ${m *c}<br>`
        }
}
