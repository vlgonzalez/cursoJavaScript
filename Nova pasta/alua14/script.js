function clicar(){
    var inicio = document.getElementById('Inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    if ( inicio.value.length ==0 ||fim.value.length ==0 ||passo.value.length==0 ){
     res.innerHTML= "Impossivel de contar"
} else{
    res.innerHTML = 'Contando: <br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (i < f) {
    for (var c = i ; c <= f ; c += p ){
        res.innerHTML += ` ${c}`
    }
} else{
    for ( var c = i ; c >= f ; c -=p)
    res.innerHTML += `${c}, `
}
}
}