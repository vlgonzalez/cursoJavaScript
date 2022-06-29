function clicar (){
    var mes = String(window.prompt('Digite o mês em extenso (ex: Setembro)'))
    var res = document.getElementById('res')
    if ( mes == 'janeiro' || mes== 'fevereiro'|| mes=='março'){
        res.innerHTML=`No mes de ${mes}, estamos no verão`
    } else if (mes == 'abril' || mes== 'maio' || mes== 'junho') {
        res.innerHTML=`No mes de ${mes}, estamos no outono`
    }else if (mes == 'julho' || mes== 'agosto' || mes== 'setembro'){
    res.innerHTML=`No mes de ${mes}, estamos no inverno`
     } else if (mes == 'outubro' || mes== 'novembro' || mes== 'dezembro'){ 
    res.innerHTML=`No mes de ${mes}, estamos no primavera`
     }else{
        res.innerHTML='Favor digitar um mes valido conforme exemplo'
    }
    
}