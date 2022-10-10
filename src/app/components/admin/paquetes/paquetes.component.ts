import { Component, OnInit } from '@angular/core';

import {Packet as Packet} from 'src/app/model/admin.model';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss']
})
export class PaquetesComponent implements OnInit {

  constructor() { }

  packet: Packet[] = [
    {
      idPacket: 1,
      nombreDestino: "Machupicchu",
      tiempo: "Full Day",
      precioDestino: 550,
      hora: 4,
      min: 0,
    },
    
    {
      idPacket: 2,
      nombreDestino: "Valle Sagrado",
      tiempo: "Full Day",
      precioDestino: 320,
      hora: 7,
      min: 0,
    },

    {
      idPacket: 3,
      nombreDestino: "Montaña Arco Iris",
      tiempo: "12 horas",
      precioDestino: 350,
      hora: 5,
      min: 0,
    },

    {
      idPacket: 4,
      nombreDestino: "Laguna Humantay",
      tiempo: "12 horas",
      precioDestino: 410,
      hora: 7,
      min: 0,
    },

    {
      idPacket: 5,
      nombreDestino: "Ollantaytambo",
      tiempo: "10 horas",
      precioDestino: 330,
      hora: 7,
      min: 0,
    },

    {
      idPacket: 6,
      nombreDestino: "Ciudad del Cusco",
      tiempo: "4 horas",
      precioDestino: 250,
      hora: 9,
      min: 0,
    }
  ];

  ngOnInit(): void {
  }

}
