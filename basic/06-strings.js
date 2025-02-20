// Strings

// Concatenacion de cadenas

let nombre = "roberto"
let saludo = "Hola, " + nombre + "!"
console.log(saludo)
console.log(typeof saludo)

// Longitud
console.log(saludo.length)

// Acceso a caracteres
console.log(saludo[0])
console.log(saludo[1])

// Metodos comunes
console.log(saludo.toUpperCase())
console.log(saludo.toLowerCase())
console.log(saludo.indexOf("roberto"))
console.log(saludo.includes("Hola"))
console.log(saludo.includes("beto"))
console.log(saludo.slice(0, 10))
console.log(saludo.replace("roberto", "Beto"))

// Tamplate literals (plantillas literales)
let mensaje = `Hola, este es mi curos 
de JavaScript`

console.log(mensaje)

let email = "robertolainez02@gmail.com"

// Interpolacion
console.log(`hola, ${nombre}! tu correo es ${email}`)