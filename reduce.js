const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 1.99},
    { nome: 'Celular', qtde: 1, preco: 1100.99},
    { nome: 'Notebook', qtde: 2, preco: 3774.99},
    { nome: 'Teclado', qtde: 2, preco: 37.99}
];

// somar todos os itens do carrinho e valores

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el

const totalGeral = carrinho
.map(getTotal)
.reduce(somar)

console.log(totalGeral)