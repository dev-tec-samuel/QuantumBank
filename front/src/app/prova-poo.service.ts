import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvaPooService {

  private TAXA_FIXA = 0.009;

  constructor() {}

  calcularRendimento(aporteMensal: number, meses: number): number {
    let montante = 0;

    for (let i = 0; i < meses; i++) {
      montante = (montante + aporteMensal) * (1 + this.TAXA_FIXA);
    }

    return montante;
  }

  calcularMeses(dataResgate: Date): number {
    const dataAtual = new Date();
    const diffTime = dataResgate.getTime() - dataAtual.getTime();
    const diffMeses = diffTime / (1000 * 3600 * 24 * 30);
    return Math.floor(diffMeses);
  }
}
