function carregar(){
    var res = document.getElementById('res')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(hora >= 0 && hora <12){
        img.setAttribute('src','manha.png')
    } else if (hora > 12 && hora < 18) {
        img.setAttribute('src','tarde.png')
    } else {
        img.setAttribute('src','noite.png')
    }   
    res.innerHTML=`Agora são ${hora} horas!`
    res.appendChild(img)
}