import { Component, OnInit, TemplateRef } from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import {Packet as Packet} from 'src/app/model/admin.model';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss']
})
export class PaquetesComponent implements OnInit {

  constructor(public modalService: BsModalService) { }

  modalRef?: BsModalRef;
  posicionEditar:number = 0;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.destino=this.packet[this.posicionEditar].nombreDestino;
    this.tiempo=this.packet[this.posicionEditar].tiempo;
    this.precio=this.packet[this.posicionEditar].precioDestino;
  }

  destino: string ="";
  tiempo: string = "";
  precio: number = 0;

  paqueteGuardar(): void{
    
    const replace: any ={
      nombreDestino: this.destino,
      tiempo: this.tiempo,
      precioDestino: this.precio
    }
    this.packet.splice(this.posicionEditar,1,replace);
    this.destino="";
    this.tiempo="";
    this.precio=0;
  }
  
  packet: Packet[] = [
    {
      idPacket: 1,
      nombreDestino: "Machupicchu",
      tiempo: "Full Day",
      precioDestino: 550
    },
    
    {
      idPacket: 2,
      nombreDestino: "Valle Sagrado",
      tiempo: "Full Day",
      precioDestino: 320
    },

    {
      idPacket: 3,
      nombreDestino: "Montaña Arco Iris",
      tiempo: "12 horas",
      precioDestino: 350
    },

    {
      idPacket: 4,
      nombreDestino: "Laguna Humantay",
      tiempo: "12 horas",
      precioDestino: 410
    },

    {
      idPacket: 5,
      nombreDestino: "Ollantaytambo",
      tiempo: "10 horas",
      precioDestino: 330
    },

    {
      idPacket: 6,
      nombreDestino: "Ciudad del Cusco",
      tiempo: "4 horas",
      precioDestino: 250
    }
  ];

  ngOnInit(): void {
  }

}
