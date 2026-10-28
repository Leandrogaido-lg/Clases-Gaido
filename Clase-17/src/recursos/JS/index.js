//import productos from './productos.js' no nombrada
import {productosMascotas, categorias} from './productos.js' //nombrada
import {filtrarPorTalle, renderizarCatalogo} from './funciones.js'

//refenreciamos un elementos DOM 
const contenedorProductos = document.getElementById("contenedor-productos")
const eventoBoton = document.getElementById('evento-boton')

//Escuchador 
eventoBoton.addEventListener('click', (evento)=>{
    //console.log(evento)
    dialogo.showModal()
})


//Select
/*
<select name="talle">
    <option values="S">S</option>
<select>
*/ 

//filtramos el arreglo de los productos 
const filtrarPorTalle = filtrarPorTalle(productosMascotas, 'S')

//renderizado
renderizarCatalogo(contenedorProductos, productosMascotas)