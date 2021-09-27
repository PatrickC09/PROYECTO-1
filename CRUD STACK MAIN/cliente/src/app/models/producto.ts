export class Producto {
    _id?: number
    nombre: string
    descripcion: string
    cantidad: string
    precio:number

    constructor(nombre: string, descripcion: string, cantidad: string,precio:number) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;

    }
}