class Items {
    code;
    nombre;
    precio;
    stock;
    
    constructor(codx, nombre, precio, stock=10){
        this.code = codx;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const clavos = new Items ('10', 'Clavos', 120, 25)
const tornillos = new Items ('20', 'Tornillos', 200, 50)
const martillo = new Items ('30', 'Martillo', 500, 2)

let prodStock = [clavos, tornillos, martillo]

class Carro {
    productos_carro;
    totalCosto;
    constructor(productos_carro = [], totalCosto = 0){
        this.productos_carro = productos_carro;
        this.totalCosto = totalCosto;
    }
    agregarProducto(code_consulta){
        if (searchProd(code_consulta)){
            console.log("Se encuentra")
        } else {
            console.log("NO se encuentra")
        }
    }
}



function searchProd(code) {
    for (i=0; i<prodStock.length; i++) {
        if (prodStock[i].code === code) {
            result = true
        } else {
            result = false
        }
    }
    return result
}

let my_carrito = new Carro ()

//console.log(my_carrito)
//console.log(prodStock)
//console.log(searchProd('30'))

my_carrito.agregarProducto('30')