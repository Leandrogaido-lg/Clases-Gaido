
//TAREA crear una funcion de renderizado
//la funcion debe tener 2 parametros 
// 1er parametro -> para la referencia del contenedor
// 2do parametro -> para el arreglo de productos 
// retorno  -> el String del HTML 


renderizarCatalogo(contenedorProductos, productosMascotas)

function renderizarCatalogo(contenedor /*Es la referencia del DOM*/ , productos /*es el arreglo*/ ){


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

contenedor.innerHTML= productosHTML
return productosHTML
}

function filtrarPorTalle(arreglo,talle){
    //. filter -> solo dejar pasar al nuevo arreglo, si en el arrelgo tallas tiene el talle buscado
    return arreglo.filter((producto)=>{
      const talles = producto.talles.filter((talles)=>{
            return talleEncontrado === talle
        })
        return talles.length > 0
    })
}


export {renderizarCatalogo, filtrarPorTalle}