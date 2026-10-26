//import productos from 
import {productosMascotas, categorias} from './productos.js'
import {filtrarPorTalle, renderizarCatalogo} from './funciones.js'
//refenreciamos un elementos DOM 
const contenedorProductos = document.getElementById("contenedor-productos")

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