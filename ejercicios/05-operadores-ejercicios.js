// 1. Crea una variable para cada operacion aritmetica

let num1 = 10
let num2 = 5

let suma = num1 + num2
let resta = num1 - num2
let multiplicacion = num1 * num2 
let division = num1 / num2
let modulo = num1 % num2

console.log(suma, resta, multiplicacion, division, modulo)


// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso
// de las variables utilizadas para las operaciones aritmeticas

let resultado = 10

resultado += suma
resultado -= resta
resultado *= multiplicacion
resultado /= division

console.log(resultado)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion

let a = 20
let b = 12

console.log(a > b)  //a es mayor (>) que b
console.log(a >= b) //a es mayor o igual (>=) que b
console.log(a == a) //a es igual (==) que a
console.log(a === 20) //a es igual por identidad (por tipo y valor)
console.log(a !== "20") 

// 4. Imprime 5 comparaciones falsas con diferenres operadores de comparacion

console.log(a < b) //a es menor (<) que b
console.log(a <= b) //a es menor o igual (<=) que b
console.log(b !== 12) 
console.log(b === 20) //b no es igual que  a (por tipo y valor)
console.log(b == a) //b no es igual que a

// 5. Utiliza el operador logico and

// 6. Utiliza el operador logico or

// 7. Combina ambos operadores logicos

// 8. Añade ulguna negacion

// 9. Utiliza el operador ternario

// 10. Combina operadores aritmeticos, de comparacion y logicas

