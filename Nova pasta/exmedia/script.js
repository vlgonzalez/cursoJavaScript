function clicar(){
    let nome = window.prompt('Qual o nome do aluno?')
    let n1 = Number(window.prompt(`Qual a primeira nota do aluno ${nome}?`))
    let n2 =Number (window.prompt(`Alem da nota ${n1} do aluno ${nome}, qual é a outra nota ?`))    
    let res = (n1 + n2)/2
    let r = document.getElementById('r')
    r.innerHTML = `A media final do aluno foi ${res} <br> As notas obitidas foram ${n1} e ${n2} <br>`
    if( res <= 5){
    r.innerHTML += `O aluno ${nome}, precisa estudar mais`
    }else {
        r.innerHTML += `Parabens ${nome}`
    }
}