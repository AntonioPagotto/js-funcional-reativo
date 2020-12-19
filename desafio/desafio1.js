const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 1.99, fragil: false},
    { nome: 'Celular', qtde: 1, preco: 1100.99, fragil: true},
    { nome: 'Notebook', qtde: 2, preco: 3774.99, fragil: true},
    { nome: 'Teclado', qtde: 2, preco: 37.99, fragil: false}
];


// 1. apenas os frágeis
// 2. qtde 10, preco 1.99 => total
// 3. media dos valores totais 

//1
const frageis = carrinho.filter((x) => x.fragil == true);
console.log(frageis)

// 2

const totalValue = carrinho.map((x) => x.qtde * x.preco)
console.log(totalValue)

// 3

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el, indiceatual, arraycompleto) => {
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        return{
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }
    }, {/*valores iniciais*/ qtde: 0, total: 0, media:0 })
    .media

    console.log(media)