let p = new Promise((promessaCumprida, promessaRejeitada) => {
    // 3 é enviado para "valorCumprido"
    promessaCumprida(3);
    promessaRejeitada("rejeitada")
})

// metodo then é chamado quando a promessa é cumprida
p.then((valorCumprido) => {
    console.log(valorCumprido)
})
p.catch((valorRejeitado) => {
    console.log(valorRejeitado)
})


/// passando mais de um valor na callback das promisses => crie um obj, exemplo:

let bubu = new Promise((accept) => {
    accept({
        x: 3,
        y: 4,
        z: 99
    })
})

//////////////////////////////