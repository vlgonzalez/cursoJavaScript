function clicar(){
    var ano = document.getElementById('ano')
    var sex = document.getElementsByName('sex')
    var res = document.getElementById('res')
    var data = new Date()
    var anot = data.getFullYear()
    var img = document.createElement('img')
    var genero = ''
    img.setAttribute('id','foto')
    var idade = anot - Number(ano.value) 
    if( ano.value ==0 || anot < ano.value){
        window.alert('ERRO, verifique o valor digitado!')
    else (sex[0].checked) {
        genero = ('Homem')
    }else if(idade <=10 && ){
        img.setAttribute('src', 'criancah.png')
    } 
    res.innerHTML=`Sua idade é ${idade} anos`
    res.appendChild(img)  
    }