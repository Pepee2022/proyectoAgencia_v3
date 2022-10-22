import { Component, OnInit } from '@angular/core';
import { Packet } from 'src/app/model/admin.model';
import { PacketDataService } from 'src/app/services/packet-data.service'

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  pags: Packet[] = [];

  constructor(private PacketDataService: PacketDataService) { 
    this.pags = PacketDataService.packet;
  }

  eliminarPaquete(posicion: number): void {
    this.pags.splice(posicion, 1)
  }

  ngOnInit(): void {
  }

}

