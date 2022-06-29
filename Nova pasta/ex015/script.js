function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if(fano.value.length ==0 || Number(fano.value)>ano){
        window.alert('ERRO. Verifique o valor digitado')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
        if (idade >0 && idade < 10) {
            img.setAttribute('src', 'criancah.png')
        } else if ( idade < 22) {
            img.setAttribute('src', 'jovemh.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'adultoh.png')
        } else{
            img.setAttribute('src', 'idosoh.png')
        }    
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        if (idade >0 && idade < 10) {
            img.setAttribute('src', 'criancam.png')
        } else if ( idade < 22) {
            img.setAttribute('src', 'jovemm.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'adultom.png')
        } else{
            img.setAttribute('src', 'idosom.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos o genero ${genero} com a idade de ${idade} anos.`
    res.appendChild(img)
}
}