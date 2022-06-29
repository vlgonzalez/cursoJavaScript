function clicar(){
    let res = document.getElementById('res')
    let ini = Number(document.getElementById('ini').value)
    let fim = Number(document.getElementById('fim').value)
    res.innerHTML+= `Contado de ${ini} até ${fim} <br>`
    if(ini<=fim){
        while(ini<=fim){
        res.innerHTML+= `${ini},`
        ini++}
    }else{
        while(ini>=fim){
        res.innerHTML+= `${ini}, `
        ini--}
    }
}