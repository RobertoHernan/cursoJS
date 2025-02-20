// Operadores

//operadores aritmeticos
let a = 5
let b = 10

console.log(a + b) //suma
console.log(a - b) //resta
console.log(a / b) //division
console.log(a * b) //Multiplicacion 


console.log(a % b) //modulo
console.log(a ** b) //exponente

a++ //incremento
console.log(a)

b-- //decremento
console.log(b)

//operadores de asignacion

let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2


//operadores de comparacion

console.log (a > b)
console.log (a < b)
console.log (a >= b)
console.log (a <= b) 
console.log (a == a)
console.log (a === a) // Igualdad por identidad (por tipo y valor)
console.log (a === 6)
console.log (a === "6")
console.log (a != 6)
console.log (a !== "6")

// Truthy values (valores verdaderos)
/* Todos los numeros positivos y negativos menos el cero 
    Todas las cadenas de texto menos las vacias
    el boolean ture 
*/

// Falsy values (valores falsos)

/*
    0
    0n
    Null
    undefined
    NaN
    boolean false
    cadenas de texto vacias
*/

//operadores logicos

// and (&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)

// not (!)
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// operdores ternarios
const isRaining = false
isRaining ? console.log("Esta lloviendo") : console.log("No esta lloviendo")