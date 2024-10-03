// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Correntista } from '../model/correntitsta';

// @Injectable({
//   providedIn: 'root'
// })
// export class CorrentistaService {

//   constructor(
//     private http: HttpClient
//   ) { }

//   public cadastrar(correntista: Correntista): Observable<any> {
//     return this.http.post("http://localhost:3000/correntistas", correntista);
//   }
// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Correntista } from '../model/correntitsta';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(
    private http: HttpClient
  ) { }

  // Método para cadastrar um novo correntista
  public cadastrar(correntista: Correntista): Observable<any> {
    return this.http.post("http://localhost:3000/correntistas", correntista);
  }

  // Método para obter a lista de correntistas
  public listarCorrentistas(): Observable<Correntista[]> {
    return this.http.get<Correntista[]>("http://localhost:3000/correntistas");
  }
}
