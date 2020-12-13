function esperarPor(tempo){
    const futuro = Date.now() + tempo
    while(Date.now() < futuro){}
}

//depois de 5s ele chama o timeout
setTimeout(() => console.log('Exec #01'), 400)

setTimeout(() => {
    esperarPor(3000)
    console.log('Exec #02')
}, 300)


//aguarda 5s para executar
esperarPor(5000);
console.log('Fim')