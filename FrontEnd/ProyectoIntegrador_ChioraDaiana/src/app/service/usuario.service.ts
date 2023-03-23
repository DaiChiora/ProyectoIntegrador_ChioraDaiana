import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
    URL = 'https://localhost:8080/usuario/';

  constructor(private http: HttpClient) { }

  public getUser(): Observable<usuario>{
    return this.http.get<usuario>(this.URL+ 'id/{id}');
  }
}