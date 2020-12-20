function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject) => {

        if(Math.random() < chanceErro) {
            reject('40374');
        } else {
            resolve(valor);
        }

    })
}

funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(v)) //chamei o resolve
    .catch(err => console.log(`Erro: ${err}`)) //chamei o reject
    .then(()=> console.log('Fim'))    //esse then recebe os dados do ultimo then, pois o catch nao retorna nada.....