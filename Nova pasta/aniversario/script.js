function clicar(){
    var res=document.getElementById('res')
    var ano = Number(window.prompt('Que ano vc nasceu ?'))
    var data = new Date()
    var ano1 = Number(data.getFullYear())
    var idade = ano1 - ano
    res.innerHTML= `Quem nasceu em ${ano} completa em  ${ano1}, ${idade} anos`
    

}