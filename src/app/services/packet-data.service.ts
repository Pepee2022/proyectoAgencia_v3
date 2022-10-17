import { Injectable } from '@angular/core';
import { Packet } from '../model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class PacketDataService {

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

  constructor() { }
}
