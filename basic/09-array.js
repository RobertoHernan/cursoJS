// array

//declaracion

let myArray = []
let myArray2 = new Array ()

console.log(myArray)
console.log(myArray2)

myArray = [1]
myArray2 = new Array (1)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array (1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Roberto", "Lainez", "Beto"]
myArray2 = new Array ("Roberto", "Lainez", "Beto")

console.log(myArray)
console.log(myArray2)

myArray2 = new Array (3)
myArray2[2] = "Roberto"
//myArray2[0] = "Lainez"
myArray2[1] = "Beto"

console.log(myArray2)

myArray = []
myArray[2] = "Roberto"
//myArray[0] = "Lainez"
myArray[1] = "Beto"

console.log(myArray)

// Metodos comunes

myArray = []

//push y pop

myArray.push("Roberto")
myArray.push("Lainez")
myArray.push("Beto")
myArray.push("23")

console.log(myArray)

console.log(myArray.pop()) // Elimina el ultimo y lo devuelve 
myArray.pop()

console.log(myArray)

//shift y unshift
console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Roberto", "Beto")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa
console.log(myArray)

// slice

myArray = ["Roberto", "Lainez", "Beto", 37, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Roberto", "Lainez", "Beto", 37, true]

myArray.splice(1, 0, "Nuevo elemento")
console.log(myArray)