// definimos la clase

class Producto {
  constructor(id, nombre, precio, stock, descripcion) {
    this.id = id;
    this.nombre = nombre.toLowerCase();
    this.precio = parseFloat(precio);
    this.stock = stock;
    this.descripcion = descripcion;
  }

  // metodo para consultar stock en una venta

  vender(cantidad) {
    if (cantidad > 0 && cantidad <= this.stock) {
      this.stock -= cantidad;
      console.log(
        "Venta realizada. Quedan " +
          this.stock +
          " " +
          this.descripcion +
          " disponibles en stock.",
      );
    } else {
      console.log(
        "Lamentablemente no contamos con " +
          this.nombre +
          " " +
          this.descripcion +
          " en stock.",
      );
    }
  }
}

// instanciamos los objetos

const laptop = new Producto(1, "laptop", 699, 5, "MacBook Air");
const tablet = new Producto(2, "tablet", 400, 8, "Samsung Galaxy");
const celular = new Producto(3, "celular", 250, 10, "Xiaomi RedMi Pro");

// llamamos para probar la funcion

laptop.vender(2);
tablet.vender(10);
celular.vender(3);


//CONTINUANDO CON LOS OBJETOS DE LA PRE-ENTREGA 5 COMO PIDE ESTE EJERCICIO

// creamos array con los objectos para usar metodos de orden superior

const productos = [laptop, tablet, celular];

// metodo .filter() (devuelve nuevo array que cumple con la condicion de filtrar productos disponibles mayor a 300) 

const productoDisponible = productos.filter ((producto) => producto.precio > 300 && producto.stock > 0 );
console.log("Los productos disponibles en stock mayor a $300 son:" , productoDisponible);

// metodo .find() para devolver exactamente el objeto buscado

const productoEncontrado = productos.find ((producto) => producto.nombre === "tablet" && producto.descripcion === "Samsung Galaxy");
console.log("El producto encontrado es" , productoEncontrado);

// metodo de transformacion .map() para aplicar descuento del 20%

const productosConDescuento = productos.map ((producto) => (
  {nombre: producto.nombre,
   precio: Math.round(producto.precio * 0.8)
  }))

console.log("Los productos con 20% de descuento son" , productosConDescuento);