import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NgxNavbarModule } from 'ngx-bootstrap-navbar'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { CollapseModule } from 'ngx-bootstrap/collapse'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/commons/menu/menu.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { DatosComponent } from './components/admin/datos/datos.component';
import { VentasComponent } from './components/admin/ventas/ventas.component';
import { PaquetesComponent } from './components/admin/paquetes/paquetes.component';
import { NuevoPaqueteComponent } from './components/admin/nuevo-paquete/nuevo-paquete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    DatosComponent,
    VentasComponent,
    PaquetesComponent,
    NuevoPaqueteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxNavbarModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
