function clicar(){
    var res = document.getElementById('res')
    var n = 1
    res.innerHTML='Contando de 1 até 10 <br>'
    while(n<=10){
        res.innerHTML+=  `${n}; `
        n++}
    
}