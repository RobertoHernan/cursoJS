// set

// Declaracion 

let mySet = new Set()

console.log(mySet)

// Inicializacion

mySet = new Set(["Roberto", "Lainez", "Beto", 37, true, "lainezroberto02@gmail.com"])

console.log(mySet)

// Metodos comunes

// add y delete

mySet.add("Hernan")
console.log(mySet)

mySet.delete("Hernan")
console.log(mySet)

console.log(mySet.delete("Roberto"))
console.log(mySet)

// has

console.log(mySet.has("Roberto"))
console.log(mySet.has("Lainez"))

// size

console.log(mySet.size)

// convertir un  ser a array

let myArray = Array.from(mySet)
console.log(myArray)

// Convertir array a set

mySet = new Set(myArray) 
console.log(mySet)

// Los set no admite duplicados

mySet.add("lainezroberto02@gmail.com")
mySet.add("lainezroberto02@gmail.com")
mySet.add("lainezroberto02@gmail.com")
console.log(mySet)