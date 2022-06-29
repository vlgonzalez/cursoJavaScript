    let num = document.getElementById('n')
    let list = document.getElementById('list')
    let res = document.getElementById('res')
    let valores = [] // variavel composta que vai receber os valores de num

function isnumero(n){ // n esta recebendo o valor num que vem da função adicionar
if (Number(n)>=1 && Number(n)<=100){
    return true
}else{
        return false
    }
}
function inlist (n, l){ // n e l estão recebendo os valores respecitivamente de num e valores da função adicionar
    if (l.indexOf(Number(n)) !=-1){ // se um valores não estiver na liste ele retorna -1 por isso !=-1 que siguinifica diferente de menos um
        return true
   }else {
        return false
   } 
}
function adicionar(){
if (isnumero(num.value) && !inlist(num.value, valores)){ // isnumer( se o valor de num esta dentro de 1 e 100) inslist(se o valor ja esta na lista)
    valores.push(Number(num.value)) // adiciona num dentro da variavel composta valores
    let item = document.createElement('option') // cria um item 
    item.text=`Valor ${num.value} adicionado` 
    list.appendChild(item) // coloca esse item criado dentro da list
    res.innerHTML="" // limpa a função finalizar quando se adiciona um  novo numero e não aperta o botão finalizar 
    } else{
        window.alert('valor invalido')
    }
    num.value=''//limpa os valores digitados no imput
    num.focus() // volta o cursor do mouse para o imput
}
function finalizar(){
    if( valores.length==0){ // se a variavel composta não tiver nenhum valor da um erro
        window.alert('não é possivel calcucar')
    } else{
        let tot = valores.length // conta o numer de valores digitados 
        let maior = valores[0] // no caso o numero zero indica que estamos começando pelo primeiro valor digitado
        let menor = valores[0] // mesmo que o anterior 
        let soma = 0
        let media = 0
        for(let pos in valores){ // faz uma varredura no vetor identificando os valores
            soma +=valores[pos] //soma todos os valores
        if (valores[pos]> maior) // identificar o maior valor dentro do vetor
            maior = valores[pos]
        if(valores[pos]< menor) //mesmo que o maior 
            menor = valores[pos]
        }
        media = soma/tot
        res.innerHTML= ""
        res.innerHTML+=`<p> Ao todo temos ${tot} numeros </p> `
        res.innerHTML+=`<p> O maior valor informado foi ${maior}</p> `
        res.innerHTML+=`<p> O menor valor informado foi ${menor}</p> `
        res.innerHTML+=`<p> A soma dos valores informado foi ${soma}</p> `
        res.innerHTML+=`<p> A media dos valores informado foi ${media}</p> `
    }
}



