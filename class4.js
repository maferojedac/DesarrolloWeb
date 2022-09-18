//prueba una unidad de codigo -
//FUNCTION
const add = (num1, num2) => {
    return num1 + num2;
}

test('It works', () => {
    const result1 = add(1, 2);
    expect(result1).toBe(3);
})

test('It fails', () => {
    const result1 = add(1, 2);
    expect(result1).toNotBe(5);
})


//OPERADORES TERNARIOS
const condition = false;
const value1 = 1;
const value2 = 1;

//ie-if else
let result_ie = add(1, 2);

if (condition) {
    result_ie = 3
}
else {
    result_ie = 0
}

//operador ternario:
//condition es igual a true? si=3 no=0
let result = condition ? 3 : 0;
console.log('result', result)

let resulty = condition == "hola" ? 3: 0;
console.log('resulty', resulty)

const age = 18;

//se puede pero no es recomendable
let message = (age < 3) ? 'Hello there you small one' :
    (age < 18) ? 'Hello' :
    (age < 100) ? 'Oh wow' :
    'Error not valid age';

    console.log('mensaje', message)
    
//ARROW FUNCTIONS

//asi se creaban las funciones originalmente
//siempre se necesita el return
let sum_og = function(a,b) { return a + b} 

//resumido en una funcion de flecha
//cuando es de una sola linea, no se necesita el return
let sum_arrow_funcion =  (a,b) => {a + b};

//las funciones deben funcionar igual que una variable funcion
//FUNCIONES ANONIMAS
const boolean = true;

let myFunc = boolean ?
    () => {console.log('True')}:
    () => {console.log('False')}

console.log ('boolean, myFunc()', boolean, myFunc())


//OPTONAL CHAINING
let user = {}

user = {
    address:{}
}

console.log('user',user)
//codigo invalido porque no existe - undefined code
console.log('colony',user.address.colony.municipality)

//si existe colony, trae municipality
console.log('colony',user.address.colony?.municipality)

user = {
    address: {
        street: 'Random Street Value',
        colony: {
            municipality: '1'
        }
    }
}

//como si existe, va a traer el valor
console.log('colony',user.address.colony?.municipality)


//TOUCH DESTRUCTURING - DESTRUCTURACION DE OBJETOS
//se destructurar pueden arreglos y objetos
let arr = ['Maria', 'Fernanda', 'Ojeda']

const firstName1 = arr[0]
const lastName1 = arr[1]

//es lo mismo que poner que lo de arriba
arr2[0] = "hola"
arr2[1] = "k tal"
const [firstName, lastName] = arr2;
console.log('firstName', firstName, 'lastName', lastName)

let arr3 = ['Maria', 'Fernanda', 'Ojeda']
const [firstName3, lastName3] = arr;
console.log('My new vars', firstName3, lastName3)

//arreglo de caracteres
let [a,b,c] = 'xyz'
//set-lista, siempre viene ordenada por default abc, no admite elementos repetidos
//no necesitas un for para recorrerlo como a un arreglo
let [one, two, three] = new Set ([1,2,3])

console.log('a:',a)
console.log('mySet',Set)


//ESTRUCTURARION

const {userName} =  user1;
console.log('userName', userName)

//cambiar el nombre de la variable
const {userLastName : apellido1} =  user1;

//L131 - es igual a:
// const apellido = user.userLastName

console.log('userName', userName)

let user1 = {
    userName: 'Vania',
    userLastName: 'Haro',
    userPhone: '4'
}

const {userLastName : apellido, userPhone ='55555555'} =  user1;
console.log('userPhone', userPhone);

//hace una copia de user2 y le agrega ese campo
const user2 = {
    ...user1,
    //sobrescribe la info
    userName: 'Jose',
    nationality: 'Mex'
}

console.log('user2',user2)

//devuelve todo, excepto nacionality
const{nationality, ...rest} = user2
console.log('rest', rest)


//ESTRUCTURACION ANINADA
const item = {
    itemName: 'Casa',
    itemDescription: {
        size: 14,
        color: 'red'
    }
}

//destructuracion aninadas
const {itemDescription: {size, color: clr} } = item;
console.log('size', size)
console.log('color', clr)

const myFunction = ( {itemName} ) => {

}

console.log('myFunction(user)',myFunction(item))