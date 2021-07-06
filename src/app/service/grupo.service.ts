import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Grupo } from '../model/Grupo';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(
    private http: HttpClient) { }

    token = {
      headers: new HttpHeaders().set('Authorization', environment.tokenUsuario)
    }

    getAllGrupo(): Observable<Grupo[]>{
      return this.http.get<Grupo[]>('https://rssalutem.herokuapp.com/grupo/todos', this.token)
    }

    getByIdGrupo(id: number): Observable<Grupo>{
      return this.http.get<Grupo>(`https://rssalutem.herokuapp.com/grupo/id/${id}`, this.token)
    }

    postGrupo(grupo: Grupo): Observable<Grupo>{
      return this.http.post<Grupo>('https://https://rssalutem.herokuapp.com/grupo/cadastrar', grupo, this.token)
    }

}
