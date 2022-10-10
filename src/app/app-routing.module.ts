import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DatosComponent } from './components/admin/datos/datos.component';
import { PaquetesComponent } from './components/admin/paquetes/paquetes.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';

const routes: Routes = [
  { path: 'datos', component: DatosComponent },
  { path: 'ventas', component: VentasComponent },
  { path: 'paquetes', component: PaquetesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
