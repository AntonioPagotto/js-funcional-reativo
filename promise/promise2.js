let p = new Promise((promessaCumprida, promessaRejeitada) => {
    promessaCumprida(['Antonio', 'Analista de Sistemas', '22 anos', 'Estudante']);
})
//note que:
// o resultado de um metodo then é passado para o proximo metodo then, assim por diante....
   .then(valor => valor[0]) // primeiro item do array
   .then(primeiro => primeiro[0])  //primeira letra do item
   .then(letra => letra.toLowerCase())  // passando para minusculo
   .then(letraMinuscula => console.log(letraMinuscula))


