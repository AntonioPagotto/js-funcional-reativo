
const carrinho = [
    { nome: 'Caneta', qtde: 1220, preco: 7.99},
    { nome: 'Celular', qtde: 120, preco: 1100.99},
    { nome: 'Notebook', qtde: 0, preco: 3774.99},
    { nome: 'Teclado', qtde: 144, preco: 37.99}
];

const qtdeMaiorQueZero = item => item.qtde > 0;
const qtdeAltas = item => item.qtde > 1000;

const NomesProdsValidos = carrinho
.filter(qtdeAltas)
.map((item => item.nome));


console.log(NomesProdsValidos);