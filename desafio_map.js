
const carrinho = [
    { nome: 'Caneta', qtde: 1220, preco: 7.99},
    { nome: 'Celular', qtde: 120, preco: 1100.99},
    { nome: 'Notebook', qtde: 550, preco: 3774.99},
    { nome: 'Teclado', qtde: 144, preco: 37.99}
];

const getNome = item => item.nome;

const n = carrinho.map(getNome);

console.log(n);

const getTotal = item => item.qtde * item.preco;

const totais = carrinho.map(getTotal);
console.log(totais);