export interface Packet {
    idPacket: number;
    nombreDestino: string;
    tiempo: string;
    precioDestino: number;
    hora: number;
    min: number;
}

export interface User {
    nombreUsuario: string;
}

export interface Nuevo {
    paqueteId: number;
    nombre: string;
    tiempo: string;
    precio: number;
    hora: number;
    min: number;
}