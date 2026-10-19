// // funciones

// // declaracion

// function suma(a,b){
//     //console.log(a + b)
//     return a + b
// }

// // invocar / ejecutar / llamar
// const resultado = suma(10,2)
// console.log(resultado)



// funcion flecha -> anònima 
//FatArrow

// const resta = (a, b)=>{
//     return a - b
// }


//const resta = (a, b)=> a + b  // con mas de un parametro(a-b-c) se pone parentesis, sino no.

//CallBack


const a = (cb)=>{
    console.log('Se ejecuto a')
    cb('hola')
}    

//nuestro callback
const b = (saludo)=>{
    console.log('Se ejecuto el callback b' + saludo)
}
//console.log(b())
a(()=>{
    console.log('Se ejecuto el callback b')
})


