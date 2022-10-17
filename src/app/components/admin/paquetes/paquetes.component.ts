import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {Packet as Packet} from 'src/app/model/admin.model';
import { PacketDataService } from 'src/app/services/packet-data.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss']
})
export class PaquetesComponent implements OnInit {

  constructor(private packetDataService: PacketDataService, public modalService: BsModalService) { 
    this.packet = packetDataService.packet;
  }

  modalRef?: BsModalRef;
  posicionEditar:number = 0;

  openModal(template: TemplateRef<any>, position:number) {
    this.modalRef=this.modalService.show(template);
    this.posicionEditar=position;
    this.id=this.packet[this.posicionEditar].idPacket;
    this.destino=this.packet[this.posicionEditar].nombreDestino;
    this.tiempo=this.packet[this.posicionEditar].tiempo;
    this.precio=this.packet[this.posicionEditar].precioDestino;
  }
  
  id: number = 0;
  destino: string = "";
  tiempo: string = "";
  precio: number = 0;

  paqueteGuardar(): void{
    
    const replace: any ={
      idPacket: this.id,
      nombreDestino: this.destino,
      tiempo: this.tiempo,
      precioDestino: this.precio
    }
    this.packet.splice(this.posicionEditar,this.id,replace);
    this.id=0;
    this.destino="";
    this.tiempo="";
    this.precio=0;
  }
  
  paqueteNuevo(): void {
    const newPacket ={
      idPacket: this.id,
      nombreDestino: this.destino,
      tiempo: this.tiempo,
      precioDestino: this.precio
    }

    this.packet.push(newPacket);
    this.id = 0;
    this.destino = "";
    this.tiempo = "";
    this.precio=0;
  }
  
  packet: Packet[] = [

  ];

  ngOnInit(): void {
  }

}
