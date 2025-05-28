export class Orden {
  id: number;
  detalles: string;
  total: number;
  platos: string[];

  constructor(
    id: number,
    detalles: string,
    total: number,
    platos: string[],
  ) {
    this.id = id;
    this.detalles = detalles;
    this.total = total;
    this.platos = platos;
  }
}
