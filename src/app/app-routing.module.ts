import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalleProductoComponent } from './components/paquetes/detalle-producto/detalle-producto.component';
import { GaleriaComponent } from './components/paquetes/galeria/galeria.component';
import { DatosComponent } from './components/admin/datos/datos.component';
import { PaquetesComponent } from './components/admin/paquetes/paquetes.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';

const routes: Routes = [
  { path: '', redirectTo: '/detalleProducto', pathMatch: 'full' },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'detalle-producto', component: DetalleProductoComponent },
  { path: 'datos', component: DatosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'paquetes', component: PaquetesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
