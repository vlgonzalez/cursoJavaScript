function clicar(){
  let res = document.getElementById('res')
  var n = 1
  res.innerHTML="Contando de 1 até 10, marcando os pares <br>" 
  while(n<=10){
  res.innerHTML+=`${n}; `
  n++
  if(n%2==0){
    res.innerHTML+='par'
  } }
  
  
}