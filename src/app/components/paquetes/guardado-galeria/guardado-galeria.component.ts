import { Component, Input ,OnInit } from '@angular/core';
import { Packet } from 'src/app/model/admin.model';
import { PacketDataService } from 'src/app/services/packet-data.service';

@Component({
  selector: 'app-guardado-galeria',
  templateUrl: './guardado-galeria.component.html',
  styleUrls: ['./guardado-galeria.component.scss']
})
export class GuardadoGaleriaComponent implements OnInit {

  @Input() viajes: Packet[] = [];
  pags: string[] = [];

  constructor(private PacketDataService: PacketDataService) {
    console.log("guardado.galeria.component.constructor - " + this.viajes.length);
     
   }

  ngOnInit(): void {
    console.log("guardado.galeria.component.ngoinit - " + this.viajes.length);
  }

  seleccionar(tour: Packet): void {
    this.PacketDataService.agregarPags(tour);
    console.log(this.pags);
  }
}
