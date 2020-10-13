import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filme } from './filme/filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

   cadastrarFilme(filme: Filme) {
     return this.httpClient.post<Filme>('http://localhost:8080/catalogo-filmes/persistir-filme-json', filme);
   }

   consultarFilme(id: number) {
     return this.httpClient.get<Filme>('http://localhost:8080/catalogo-filmes/consultar-filme-json?id='+ id);
   }
}
