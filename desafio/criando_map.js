// Desafio

// Criar a função .map() manualmente:

function meuMap(array, fn){
    // Criando o novo array que a função retornará 
    const mapped = [];

    // Percorrendo cada item do array recebido
    for (let i = 0; i < array.length; i++) {
        // Aplicando a função recebida no item do array recebido
        const result = fn(array[i], i, array);
        // Adicionando o resultado no novo array
        mapped.push(result)
    }
    // Retornando o novo array com as modificações
    return mapped;
}

// Testando:
const nums = [1, 3, 66, 23];
const double = item => item * 2;
console.log(meuMap(nums, double));





