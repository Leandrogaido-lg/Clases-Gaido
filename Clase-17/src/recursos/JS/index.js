// referenciamos un elemento del DOM

const contenedorProductos = document.getElementById("contenedor-productos")
// console.log('contenedor-productos')





contenedorProductos.innerHTML = `

 <article>
                    <h3>Correa</h3>
                    <picture>
                        <img src="Recursos/Productos/perro.jpg" alt="Correa de perro">
                    </picture>
                    <p>
                        Correa Mediana
                    </p>
                    <ul>
                        <li>
                            Talle S M L
                        </li>
                        <li>
                            Precio $ 20
                        </li>
                    </ul>
                    <button>Agregar al carro</button>
                </article>

`   


//TAREA crear una funcion de renderizado
//la funcion debe tener 2 parametros 
// 1er parametro -> para la referencia del contenedor
// 2do parametro -> para el arreglo de productos 
// retorno  -> el String del HTML 

let productosHTML =''   

productosMascotas.forEach((producto)=> {
    productosHTML += `
    
     <article>
                    <h3>${producto.nombre}</h3>
                    <picture>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </picture>
                    <p>
                        ${producto.descripcion}
                    </p>
                    <ul>
                        <li>
                            Talle ${producto.talles[0]}
                        </li>
                        <li>
                            Precio $ ${producto.precio}
                        </li>
                    </ul>
                    <button>Agregar al carro</button>
                </article>
    `


});

contenedorProductos.innerHTML= productosHTML