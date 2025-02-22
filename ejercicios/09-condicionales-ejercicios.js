// if, else if, else

// 1. Imprime por consola tu nombre si una variable toma su valor

let num = 20

if (num == 20) {
    console.log("Roberto")
}

// 2. Imprime por consola un mensaje si el usuario y la contraseña coincide con unos establecidos

let user = "beto"
let pasword = "1234"

if (user === "beto" && pasword === "1234") {
    console.log("Credenciales correctas")
} else {
    console.log("Credenciales incorrectas")
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje

let num1 = 10

if (num1 > 0) {
    console.log(`El numero es positivo: ${num1}`)
} else if (num1 == 0) {
    console.log(`El numero es: ${num1}`)
} else if (num1 < 0) {
    console.log(`El numero es negativo: ${num1}`)
} else {
    console.log(`No es un numero: ${num1}`)
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuantos años le faltan

let edad = 16

if (edad >= 18) {
    console.log("Puedes votar")
} else {
    let añosFaltantes = 18 - edad;  
    console.log(`Te faltan ${añosFaltantes} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo la edad

edad >= 18 ? console.log("adulto") : console.log("menor")

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 1

if (mes == 3 || mes == 4 || mes == 5) {
    console.log("Es primavera")
} else if (mes == 6 || mes == 7 || mes == 8) {
    console.log("Es verano")
} else if (mes == 9 || mes == 10 || mes == 11) {
    console.log("Es otoño") 
} else if (mes == 12 || mes == 1 || mes == 2) {
    console.log("Es invierno")
} else {
    console.log("Ingrese un mes valido entre el 1 y 12")
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercicio anterior 

if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    console.log(`El mes ${mes} tiene 31 dias`)
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
    console.log(`El mes ${mes} tiene 30 dias`)
} else if (mes == 2) {
    console.log(`El mes ${mes} tiene 28 dias`)
} else {
    console.log("El mes no existe ingrese un mes del 1 al 12")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma 

let lenguage = "de"
let mensaje

switch (lenguage) {
    case "es":
        mensaje = "Hola"
        break
    case "en": 
        mensaje = "Hello"
        break
    case "fr":
        mensaje = "Bonjour"
        break
    case "de":
        mensaje = "Hallo"
        break
    default:
        mensaje = "Idioma no soportado"
}

console.log(mensaje)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

mes = 12
let estacionDeAnio

switch (mes) {
    case 12: case 1: case 2:
        estacionDeAnio = "Invierno"
        break
    case 3: case 4: case 5:
        estacionDeAnio = "Primavera"
        break
    case 6: case 7: case 8:
        estacionDeAnio = "Verano"
        break
    case 9: case 10: case 11:
        estacionDeAnio = "Otoño"
        break
    default:
        estacionDeAnio = "El mes no existe ingrese un mes del 1 al 12"
}

console.log(`El mes ${mes} es: ${estacionDeAnio}`)

// 10. Usa un switch para hacer de nuevo el ejercicio 7

mes = 6
let diasDelMes

switch (mes) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        diasDelMes = 31
        break
    case 4: case 6: case 9: case 11:
        diasDelMes = 30
        break
    case 2:
        diasDelMes = 28
        break
    default:
        diasDelMes = "El mes no existe ingrese un mes del 1 al 12"
}

console.log(`El mes ${mes} tiene ${diasDelMes} dias`)