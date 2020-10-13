import { Autor } from '../autor/autor.model';

export class Filme {
  id?: number;
  nome: string;
  genero: string;
  ano: number;
  autor: Autor;
}
