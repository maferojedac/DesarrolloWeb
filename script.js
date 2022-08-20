//ya no se usa
//tambien su uso para variable global aunque no es recomendado porque es facil cambiarla
var vari = 'var1'

//no se le puede cambiar el valor
const const1 = 'const1'

//para propiedades que se pueden cambiar
let let1='let1'; //se puede o no poner ;
let1 = 14

console.log('let1', let1)
console.log('let1')
console.log('const1', 'let1', 'const1', let1)

console.warn('const1', 'const1')

//como antes se declarabal una funcion
function name(parameters) {

}

//arrow functions-usa la programacion funcion
//(todo lo que puedes hacer con una variable se puede hacer comouna funcion)
const myFunction = (txt) => {
    console.log(txt, 'from func')
}

myFunction('Hola')