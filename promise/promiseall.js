function gerarNumerosEntre(min, max, tempo){
    if(min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

// posso usar quando vou fazer uma requisicao e preciso aguardar todos os dados chegarem para imprimir na tela por ex....

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 30, 6000),
        gerarNumerosEntre(1, 30, 1000),
        gerarNumerosEntre(1, 30, 4000),
        gerarNumerosEntre(1, 30, 2500),
        gerarNumerosEntre(1, 30, 2000),
        gerarNumerosEntre(1, 30, 3000)
    ])
}

gerarVariosNumeros()
    .then(numeros => console.log(numeros))