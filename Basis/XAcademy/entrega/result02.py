from threading import Thread
from time import sleep

class Producto:
    def __init__(self, sku:str, nombre:str, categoria:str, precio, stock=10):
        self.sku = sku
        self.nombre = nombre
        self.categoria = categoria
        self.precio = precio
        self.stock = stock

queso = Producto('KS944RUR', 'Queso', 10, 'lacteos', 4);
gaseosa = Producto('FN312PPE', 'Gaseosa', 5, 'bebidas');
cerveza = Producto('PV332MJ', 'Cerveza', 20, 'bebidas');
arroz = Producto('XX92LKI', 'Arroz', 7, 'alimentos', 20);
fideos = Producto('UI999TY', 'Fideos', 5, 'alimentos');
lavandina = Producto('RT324GD', 'Lavandina', 9, 'limpieza');
shampoo = Producto('OL883YE', 'Shampoo', 3, 'higiene', 50);
jabon = Producto('WE328NJ', 'Jabon', 4, 'higiene', 3)

productosDelSuper = [queso, gaseosa, cerveza, arroz, fideos, lavandina, shampoo, jabon]

class Carrito:
    def __init__(self, productos=[], categorias=[], precioTotal=0):
        self.productos = productos
        self.categorias = categorias
        self.precioTotal = precioTotal

    def agregarProducto(self, sku:str, cant:int):
        self.sku = sku
        self.cant = cant

        print(f"Consultando por {self.sku}, cantidad {self.cant}")
        try:
            foundProd = Thread(target=findProductBySku, args=(sku,))
            foundProd.start()
            sleep(3)
            if foundProd:
                print("Producto encontrado")
                # nuevoProd = ProductoEnCarrito(self.sku, foundProd.nombre, self.cant, foundProd.precio)
                # if nuevoProd not in self.productos:
                #     self.productos.append(nuevoProd)
        except Exception as err:
            print(f"Ocurrió un error: {err}")



class ProductoEnCarrito:
    def __init__(self, sku:str, nombre:str, cantidad:int, precio:float):
        self.sku = sku
        self.nombre = nombre
        self.cantidad = cantidad
        self.precio = precio


def findProductBySku(sku):
    sleep(2)
    for prod in productosDelSuper:
        if prod.sku == sku:
            return prod
        else:
            return Exception 

mi_carrito = Carrito()
print(mi_carrito)

mi_carrito.agregarProducto('UI999TY', 1) #Fideos
mi_carrito.agregarProducto('KS944RUR', 2) #Queso
mi_carrito.agregarProducto('RT324GD', 1) #Lavandina
mi_carrito.agregarProducto('UI999TY', 3) #Fideos
mi_carrito.agregarProducto('RT324XX', 2) #NO existe
# mi_carrito.agregarProducto('XX92LKI', 1) #Arroz

# print(mi_carrito.productos)