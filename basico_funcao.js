const felizNatal = () => console.log('Feliz natal')
felizNatal()

const saudacao = nome => `Fala ${nome}, tudo bem?`

console.log(saudacao('Antonio'))




// const potencia = (base) => {
//     return (exp) => {
//         return Math.pow(base, exp)
//     }
// }

//Melhor::
const potencia = base => exp => Math.pow(base,exp)

console.log(potencia(2)(8))



//this 

Array.prototype.log = function(){
    console.log(this)
}

let numeros = [1,2,3]
numeros.log()

//ultimo
Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}

let nums = [1,2,3,329239]
nums.ultimo() 