import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatosComponent } from './components/admin/datos/datos.component';
import { NuevoPaqueteComponent } from './components/admin/nuevo-paquete/nuevo-paquete.component';
import { PaquetesComponent } from './components/admin/paquetes/paquetes.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';

const routes: Routes = [
  { path: 'datos', component: DatosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'paquetes', component: PaquetesComponent },
  { path: 'nuevoPaquete', component: NuevoPaqueteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
