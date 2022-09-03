//OBJECTS IN JS
let user = {
    name: 'Maria',
    age: 22,
    
    toString() { 
        //usar `  (tecla arriba <enter>)
        return `{name: ${this.name}, age: ${this.age}}`;
    }
}
console.log('user', user.toString())

//TEMPLATE LITERALS
let templateLiteral = `Hello there, my name is ${user.name} and 2 + 2 = ${1+1}`
console.log('templateLiteral:', templateLiteral)

//pasa un objeto de javascript a string
let json = JSON.stringify(user);
console.log('json:', json)

//convierte de un string a un objeto de javascript
let unparsedJson = '{"name":"Fernanda","age":"20"}';
let newUser = JSON.parse(unparsedJson);
console.log('newUser.name', newUser.name, 'newUser.age', newUser.age)

//CALL BACK-funcion que se llama dentro de otra funcion
const callback = (myFunction) => {
    myFunction();
    console.log('I am a callback')
}

//se manda a llamar una funcion anonima porque no tiene nombre
callback(()=>{
    console.log('No itsa me')
});

const argumentFunction = () => {
    console.log('Same as L31-34')
}
callback(argumentFunction)

