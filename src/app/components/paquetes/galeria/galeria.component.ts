import { Component, EventEmitter ,Input ,OnInit, Output } from '@angular/core';
import { Packet } from 'src/app/model/admin.model';
import { PacketDataService } from 'src/app/services/packet-data.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  packet: Packet[] = [
  ];

  ngOnInit(): void {
  }

  @Input() paquetes: Packet = {
    idPacket: 0,
    imge: "",
    nombreDestino: "",
    descripcion: "",
    tiempo: "",
    precioDestino: 0,
  };

  @Output() pressAgregarP = new EventEmitter();

  constructor(private PacketDataService: PacketDataService) { 
    this.packet = PacketDataService.packet;
    console.log("galeria.component.ts - " + this.packet.length);
  }

  clickAgregarP(tour: string): void {
    console.log("Se a presionado el boton Agregar. ");
    this.pressAgregarP.emit(tour);
  }

  eliminarPaquete(posicion: number): void {
    this.packet.splice(posicion, 1)
  }

}
