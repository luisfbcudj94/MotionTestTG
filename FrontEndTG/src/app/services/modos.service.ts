import { Injectable } from '@angular/core';
import { ModosModel } from '../models/ModosModel';
import { Observable } from 'rxjs';
import { HttpClient, HttpStatusCode } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModosService {

  urlApiTG = ''

  constructor(private http: HttpClient) { }


  public ActualizarModo(request: ModosModel): Observable<any> {
    const url = `${this.urlApiTG}/ActualizarModo`;
    return this.http.put(url, request);
  }

}
