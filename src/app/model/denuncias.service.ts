import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Denuncia } from './denuncias.service.spec';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private API='https://maps.google.com/'

  constructor(private http: HttpClient) {    
  }

  buscarDeputadoPorNome(): Observable<any> {
    return this.http.get<any>(`${this.API}`)
  }
}
