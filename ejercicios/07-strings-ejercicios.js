// 1. Concatena dos cadenas de texto

let nombre = "Roberto"
let apellido = "Lainez"
let edad = 23
let saludo = "Hola, " + nombre  + " " + apellido + " bienvenido"
console.log(saludo)

// 2. Muestra la longitud de una cadena de texto 

console.log(saludo.length)

// 3. Muestra el primer y ultimo caracter de un string

console.log(saludo[0])
console.log(saludo[30])

// 4. Convierte a mayusculas y minusculas un string

console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())

// 5. Crea una cadena de texto en varias lineas

let mensaje = `Una cadenad de texto
en varias lineas`

console.log(mensaje)

// 6. Interpola el valor de una variable en un string

console.log(`Hola, soy ${nombre} ${apellido}, tengo ${edad} anios`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

console.log(saludo.replace(/ /g,"-"))

// 8. Compruebe si una cadena de texto contiene una palabra concreta

console.log(saludo.indexOf("Roberto"))

// 9. Compruebe si dos string son iguales

let str1 = "Hola"
let str2 = "hola"
console.log(str1 == str2)

// 10. Compruebe si dos string tienen la misma longitud

console.log(mensaje.length === saludo.length)