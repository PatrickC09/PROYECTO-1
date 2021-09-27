import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  titulo = 'Crear producto';
  id: string | null;

  constructor(private fb: FormBuilder,
    private router: Router,
    private _productoSerive: ProductoService,
    private aRouter: ActivatedRoute) {


    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      descripcion: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.esEditar();
  }

  agregarProducto() {
    console.log(this.productoForm);
    console.log(this.productoForm.get("producto")?.value);

    const PRODUCTO: Producto = {
      nombre: this.productoForm.get("producto")?.value,
      descripcion: this.productoForm.get("descripcion")?.value,
      cantidad: this.productoForm.get("cantidad")?.value,
      precio: this.productoForm.get("precio")?.value,
    }

    if (this.id !== null) {
      // Editamos el producto 
      this._productoSerive.editarProducto(this.id, PRODUCTO).subscribe(data => {
        this.router.navigate(['/']); 

      }, error => {
        console.log(error);
        this.productoForm.reset();
      })

    } else {
      // Agregamos producto 
      console.log(PRODUCTO);
      this._productoSerive.guardarProducto(PRODUCTO).subscribe(data => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.productoForm.reset();
      })
    }
  }

  esEditar() {

    if (this.id !== null) {

      this.titulo = "Editar Producto";
      this._productoSerive.obtenerProducto(this.id).subscribe(data => {
        this.productoForm.setValue({

          producto: data.nombre,
          descripcion: data.descripcion,
          cantidad: data.cantidad,
          precio: data.precio,

        })
      })
    }

  }
}
