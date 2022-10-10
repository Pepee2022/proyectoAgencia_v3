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
      nombreDestino: "Machupicchu",
      tiempo: "Full Day",
      precioDestino: 550,
      hora: 4,
      min: 0,
    },

    {
      idPacket: 3,
      nombreDestino: "Machupicchu",
      tiempo: "Full Day",
      precioDestino: 550,
      hora: 4,
      min: 0,
    },

    {
      idPacket: 4,
      nombreDestino: "Machupicchu",
      tiempo: "Full Day",
      precioDestino: 550,
      hora: 4,
      min: 0,
    },

    {
      idPacket: 5,
      nombreDestino: "Machupicchu",
      tiempo: "Full Day",
      precioDestino: 550,
      hora: 4,
      min: 0,
    },

    {
      idPacket: 6,
      nombreDestino: "Machupicchu",
      tiempo: "Full Day",
      precioDestino: 550,
      hora: 4,
      min: 0,
    }
  ];

  ngOnInit(): void {
  }

}
