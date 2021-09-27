const Producto = require('../models/Producto');


exports.crearProducto = async (req, res) => {

    try {
        let producto;

        // creamos nuestro producto 
        producto = new Producto(req.body);

        await producto.save();
        res.send(producto);


    } catch (error) {
        console.log(error);
        res.status(500).sen("hay un error")
    }
}

exports.obtenerProductos = async (req, res) => {
    try {

        const productos = await Producto.find();
        res.json(productos)

    } catch (error) {
        console.log(error);
        res.status(500).sen("hay un error")
    }
}

exports.actualizarProducto = async (req, res) => {

    try {
        const { nombre, descripcion, cantidad, precio } = req.body;
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "No existe el producto " })
        }

        producto.nombre = nombre;
        producto.descripcion = descripcion;
        producto.cantidad = cantidad;
        producto.precio = precio;

        producto = await Producto.findByIdAndUpdate({ _id: req.params.id }, producto, { new: true })
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).sen("hay un error")
    }
}


exports.obtenerProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "No existe el producto " })
        }
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).sen("hay un error");
    }
}


exports.eliminarProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);

        if (!producto) {
            res.status(404).json({ msg: "No existe el producto " })
        }
        await Producto.findByIdAndRemove({ _id: req.params.id })

        res.json({ msg: "El producto se elimino con exito" });  

    } catch (error) {
        console.log(error);
        res.status(500).sen("hay un error");
    }
}