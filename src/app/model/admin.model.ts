//Paquetes
export interface Packet {
    idPacket: number;
    imge:string;
    nombreDestino: string;
    descripcion:string;
    tiempo: string;
    precioDestino: number;
}

//User
export interface User {
    nombreUsuario: string;
}

export interface Paquete {
    id: string;
    imge:string ;
    tour:string ;
    descripcion:string ;
    precio:number ;
}

export interface Login {
    id: string;
    user: string;
    password: string;
}