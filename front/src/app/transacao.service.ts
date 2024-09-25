import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from '../model/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(
    private http: HttpClient
  ) { }

  public buscarExtrato() {
    return this.http.get<Transacao>("http://localhost:3000/transacoes");
  }
}
