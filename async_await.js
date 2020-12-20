// async e await devolvem uma promise

function esperarPor(tempo = 2000){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor(2000)
//     .then(() => console.log('Executando promise...1'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...2'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise...3'))


///// FAZENDO COM ASYNC E AWAIT:

async function executar(){
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async await ${valor}`)

    await esperarPor(1500)
    console.log(`Async await ${valor + 1}`)
    
    await esperarPor(1500)
    console.log(`Async await ${valor + 2}`)
}

executar()

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(()=> resolve(10))
    }, 5000)
}