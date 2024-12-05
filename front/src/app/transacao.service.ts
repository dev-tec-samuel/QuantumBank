import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transacao } from '../model/transacao';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(
    private http: HttpClient
  ) { }

  public buscarExtrato(id:number): Observable<Transacao[]> {
    return this.http.get<Transacao[]>("http://localhost:8081/transacao/id_correntista/" + id);
  }
}
