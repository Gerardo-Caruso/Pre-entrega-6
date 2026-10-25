// definimos la clase

class Producto {
constructor (id, nombre, precio, stock, descripcion){
this.id = id;
this.nombre = nombre.toLowerCase();
this.precio = parseFloat(precio);
this.stock = stock
this.descripcion = descripcion;
}

// metodo para consultar stock en una venta

vender(cantidad){
if (cantidad > 0 && cantidad <=  this.stock){
this.stock -= cantidad;
console.log("Venta realizada. Quedan " + this.stock + " " + this.descripcion + " disponibles en stock.")}
else {
console.log("Lamentablemente no contamos con " + this.nombre + " " + this.descripcion + " en stock.")}
}

}

// instanciamos los objetos

const laptop = new Producto(1, "laptop", 699, 5, "MacBook Air")
const tablet = new Producto(2, "tablet", 400, 8, "Samsung Galaxy")
const celular = new Producto(3, "celular", 250, 10, "Xiaomi RedMi Pro")


// llamamos para probar la funcion

laptop.vender(2);
laptop.vender(10);
celular.vender(3);