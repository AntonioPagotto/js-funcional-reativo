
function fn1(){
    onsole.log('timeout')
    console.log('fn3')
}
function fn2(){
    fn3()
}
function fn3(){
    setTimeout(() => fn4(),3000)
    fn2()
}
(fn4)

function main() {
    fn1()
}
main()
console.log('fim')