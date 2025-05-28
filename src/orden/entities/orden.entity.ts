export class Orden {
  id: number;
  detalles: string;
  total: number;
  platos: string[];
  concinero_id: number;
  cliente_id: number;

  constructor(
    id: number,
    detalles: string,
    total: number,
    platos: string[],
    concinero_id: number,
    cliente_id: number,
  ) {
    this.id = id;
    this.detalles = detalles;
    this.total = total;
    this.platos = platos;
    this.concinero_id = concinero_id;
    this.cliente_id = cliente_id;
  }
}
