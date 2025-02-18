// 1. Escribe un comentario en una linea

    //Este es un comentario en una sola linea

// 2. Escribe un comentario en varias lineas

    /* Este es el segundo ejercicio
        de comentar en varias lineas*/

// 3. declara variables con valores asociados a tosos los datos de tipo primitivo

// Tipo string
    let nombre = "Roberto Lainez"

// Tipo numeric
    let edad = 23

// Tipo boolean
    let isSister = true
    let isUncle = false

// Undefined
    let myUndefined 

// Tipo NULL
    let nullValue = null

// Tipo symbol
    let mySymbol = Symbol("mysymbol")

// Tipo bigint
    let BigInt = 18754890175091751075012375012375n

// 4. Imprime por consola el valor de todas las variables
    // Tipo String
    console.log(nombre)

    // Tipo Numeric
    console.log(edad)

    // Tipo Boolean
    console.log(isSister)
    console.log(isUncle)

    // Tipo Undefined
    console.log(myUndefined)

    // Tipo NULL
    console.log(nullValue)

    // Tipo symbol 
    console.log(mySymbol)

    // Tipo BigInt 
    console.log(BigInt)

// 5. imprimepro consola el tipo de todas las variables

// Tipo String
    console.log(typeof nombre)

// Tipo Numeric
    console.log(typeof edad)

// Tipo Boolean
    console.log(typeof isSister)
    console.log(typeof isUncle)

// Tipo Undefined
    console.log(typeof myUndefined)

// Tipo NULL
    console.log(typeof nullValue)

// Tipo symbol 
    console.log(typeof mySymbol)

// Tipo BigInt 
    console.log(typeof BigInt)

// 6. A continuacion, modifica los valores de las variables por otros del mismo tipo

    // Tipo String
        nombre = "Hernan Trejo"

    // Tipo Numeric
        edad = 24

    // Tipo Boolean
        isSister = false
        isUncle = true

    // Tipo Undefined
        myUndefined = undefined

    // Tipo NULL
        nullValue = null

    // Tipo symbol 
        mySymbol = Symbol("newSymbol")

    // Tipo BigInt 
        BigInt = 3247671892346712893461892468912346n


// 7. A continuacion, modifica los valores de las variables por otros de distinto tipo

    nombre = 10
    console.log(nombre)

    edad = "hola"  
    console.log(edad)

    isSister = undefined
    isUncle = 1
    console.log(isSister)
    console.log(isUncle)

    // No se puede modificar "undefined"
    // undefined = "edad"  // ERROR 

    nullValue = true
    console.log(nullValue)

    mySymbol = 134817359071905710235715n  // Esto no es un symbol, es un BigInt
    console.log(mySymbol)

    myBigInt = true  // Ahora es un booleano
    console.log(myBigInt)

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    const nombre2 = "Juan Luis"

    const age2 = 26

    const isSister2 = true 
    const isUncle2 = false

    const undefinedValue2 = undefined

    const NullValue2 = null

    const mySymbol2 = Symbol("newSymbol2")

    const BigInt2 = 7125390817509170571095n

// 9. A continuacion, modifica los valores de las constantes
/*
    nombre2 = "Carlos Salazar"
    console.log(nombre2)

    age2 = 14
    console.log(age2)

    isSister2 = false
    isUncle2 = true
    console.log(isSister2)
    console.log(isUncle2)

    undefinedValue2 = "hoy tengo un valor"
    console.log(undefinedValue2)

    NullValue2 = 100
    console.log(NullValue2)

    mySymbol2 = Symbol("otrosymbol")
    console.log(mySymbol2)

    BigInt2 = 9876543219876543219876n
    console.log(BigInt2)
*/
// 10. comenta las lineas que produzcan algun tipo de error al ejecutarse 