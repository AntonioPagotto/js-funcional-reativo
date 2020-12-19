// desafio criar função filter:

Array.prototype.myReduce = function (fn, inicial) {
    let acumulador = inicial;
    for (let i = 0; i < this.length; i++) {
        if (!acumulador && i === 0) {
            acumulador = this[i]
        } else {
            acumulador = fn(acumulador, this[i], i, this)
        }
    }
    return acumulador
}
