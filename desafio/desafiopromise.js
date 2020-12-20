const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname,'../dados.txt')

function lerArquivo(caminho) {
    //parte assincrona
    return new Promise(resolve => {
        fs.readFile(caminho, (erro, conteudo) => {
            resolve(conteudo.toString())
        })
        //parte sincrona
        console.log('depois de ler')
    })
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))