import asyncio

class Producto():
    def __init__(self, sku:str, nombre:str, categoria:str, precio, stock=10):
        self.sku = sku
        self.nombre = nombre
        self.categoria = categoria
        self.precio = precio
        self.stock = stock

queso = Producto('KS944RUR', 'Queso', 10, 'lacteos', 4)
gaseosa = Producto('FN312PPE', 'Gaseosa', 5, 'bebidas')
cerveza = Producto('PV332MJ', 'Cerveza', 20, 'bebidas')
arroz = Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20)
fideos = Producto('UI999TY', 'Fideos', 5, 'alimentos')
lavandina = Producto('RT324GD', 'Lavandina', 9, 'limpieza')
shampoo = Producto('OL883YE', 'Shampoo', 3, 'higiene', 50)
jabon = Producto('WE328NJ', 'Jabon', 4, 'higiene', 3)

productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon]

class Carrito():
    def __init__(self, productos=[], categorias=[], precioTotal=0):
        self.productos = productos
        self.categorias = categorias
        self.precioTotal = precioTotal

    async def agregarProducto(self, sku:str, cant:int):
        self.sku = sku
        self.cant = cant

        print(f"Consultando por {self.sku}, cantidad {self.cant}")
        try:
            foundProd = await findProductBySku(sku)
            if foundProd:
                print("Producto encontrado")
                nuevoProd = ProductoEnCarrito(self.sku, foundProd.nombre, self.cant, foundProd.precio)
                if nuevoProd not in self.productos:
                    self.productos.append(nuevoProd)
        except Exception:
            print(f"Ocurrió un error")



class ProductoEnCarrito:
    def __init__(self, sku:str, nombre:str, cantidad:int, precio:float):
        self.sku = sku
        self.nombre = nombre
        self.cantidad = cantidad
        self.precio = precio


async def findProductBySku(sku):
    await asyncio.sleep(2)
    #found = False
    for prod in productosDelSuper:
        if prod.sku == sku:
            return prod
        else:
            raise Exception

mi_carrito = Carrito()

prod_1 = ('UI999TY', 1) #Fideos
prod_2 = ('KS944RUR', 2) #Queso
prod_3 = ('RT324GD', 1) #Lavandina
prod_4 = ('UI999TY', 3) #Fideos
prod_5 = ('RT324XX', 2) #NO existe
# mi_carrito.agregarProducto('XX92LKI', 1) #Arroz
lista_carro = [prod_1, prod_2, prod_3, prod_4, prod_5]

async def main():
    for prod in lista_carro:
        task = asyncio.create_task(mi_carrito.agregarProducto(prod[0], prod[1]))
    await task

asyncio.run(main())

print(mi_carrito.productos)