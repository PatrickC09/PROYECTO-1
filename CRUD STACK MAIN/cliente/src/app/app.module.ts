import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

// Componentes 
import { AppComponent } from './app.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListarProdcutosComponent } from './components/listar-prodcutos/listar-prodcutos.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearProductoComponent,
    ListarProdcutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
