function clicar (){
    var n1 = Math.random()
    var n2 = Math.trunc(n1*99)
    var res = document.getElementById('res')
    res.innerHTML+=`Acabei de pensar no número ${n2}<br>`
    }
function limpar(){
    var res = document.getElementById('res')
    res.innerHTML= ''
}