import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-prodcutos',
  templateUrl: './listar-prodcutos.component.html',
  styleUrls: ['./listar-prodcutos.component.css']
})
export class ListarProdcutosComponent implements OnInit {

  listProductos: Producto[] = [];

  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error);
    })
  }
eliminarProducto(id:any){
  this._productoService.eliminarProducto(id).subscribe(data =>{
    
    this.obtenerProductos()
  }, error =>{
    console.log(error);
  })
}
}
