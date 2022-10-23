import { Injectable } from '@angular/core';
import { Packet } from '../model/admin.model';

import {User as user} from 'src/app/model/admin.model';

@Injectable({
  providedIn: 'root'
})
export class PacketDataService {

  packet: Packet[] = [
    {
      idPacket: 1,
      imge: '/assets/img/montana.jpg',
      nombreDestino: "Machupicchu",
      descripcion: 'A unos 100 kilómetros al sureste de Cusco, Perú, existe un arcoíris hecho montaña.',
      tiempo: "Full Day",
      precioDestino: 550
    },
    
    {
      idPacket: 2,
      imge: "",
      nombreDestino: "Valle Sagrado",
      descripcion: "",
      tiempo: "Full Day",
      precioDestino: 320
    },

    {
      idPacket: 3,
      imge: "",
      nombreDestino: "Montaña Arco Iris",
      descripcion: "",
      tiempo: "12 horas",
      precioDestino: 350
    },

    {
      idPacket: 4,
      imge: "",
      nombreDestino: "Laguna Humantay",
      descripcion: "",
      tiempo: "12 horas",
      precioDestino: 410
    },

    {
      idPacket: 5,
      imge: "",
      nombreDestino: "Ollantaytambo",
      descripcion: "",
      tiempo: "10 horas",
      precioDestino: 330
    },

    {
      idPacket: 6,
      imge: "",
      nombreDestino: "Ciudad del Cusco",
      descripcion: "",
      tiempo: "4 horas",
      precioDestino: 250
    }
  ];

  user: user[] = [
    {
      nombreUsuario: "Franck",
    }
  ];

  //**************************************************************************************************/
  //PAQUETES PARA EL CARRITO
  
  agregarPags(paque: Packet): void {
    this.packet.push(paque);
  }

  //**************************************************************************************************/
  //**************************************************************************************************/

  constructor() { }
}
