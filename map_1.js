
const nums = [1,2,3,5,3]

const dobro = (n) => n * 2
console.log(nums.map(dobro))

const nomes = ['ana','bia','carol','duda']

const primeiraLetra = texto => texto[0]

const letras = nomes.map(primeiraLetra)

console.log(nomes, letras)