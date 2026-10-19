// Metodos de arreglos 

const numeros = [2,8,16,60]

// //ForEach -> loop -> no devuelve nada 
// //El callback se ejecuta una vez por elemento 

// numeros.forEach((numero, index, arreglo)=>{
//     console.log(numero, index, arreglo)
// })

// Map -> loop -> devuelve un nuevo arreglo

const NumerosIncrementados = numeros.map((numero)=>{
        return numero + 1
})

console.log (NumerosIncrementados)  


// Filter (nuevo arreglo) y Find (valor)