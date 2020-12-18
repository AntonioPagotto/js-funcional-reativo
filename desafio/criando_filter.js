// desafio criar função filter:

Array.prototype.myFilter = function (fn) {
    // criando novo array que a função retornará
    const newArray = [];
    // percorrendo cada item do array recebido
    for (let i = 0; i < this.length; i++) {
        // aqui no fn:
        // this[i] = elemento atual
        // i = indice atual
        // array inteiro
        // isso retornará boolean
        if (fn(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray;

}


//testando

const carrinho = [
    { nome: 'Caneta', qtde: 1220, preco: 7.99 },
    { nome: 'Celular', qtde: 1120, preco: 1100.99 },
    { nome: 'Notebook', qtde: 0, preco: 3774.99 },
    { nome: 'Teclado', qtde: 144, preco: 37.99 }
];


const qtdeMaiorQueZero = item => item.qtde > 0;
const qtdeAltas = item => item.qtde > 1000;

const NomesProdsValidos = carrinho
.myFilter(qtdeAltas)
.map((item => item.nome));


console.log(NomesProdsValidos);