function clicar(){
    let res = document.getElementById('res')
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana1 = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let semana = data.getDay()
    let hora = data.getHours()
    let min = data.getMinutes()
    let sec = data.getSeconds()
    res.innerHTML= `Dia: ${dia}<br>`
    res.innerHTML+=`Mes: ${meses[mes]}<br>`
    res.innerHTML+=`Ano: ${ano}<br>`
    res.innerHTML+=`Semana: ${semana1 [semana]}<br>`
    res.innerHTML+=`Hora: ${hora}<br>`
    res.innerHTML+=`Minuto: ${min}<br>`
    res.innerHTML+=`Segundo: ${sec}<br>`
}