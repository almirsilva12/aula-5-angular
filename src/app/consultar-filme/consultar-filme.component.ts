import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme/filme.model';

@Component({
  selector: 'app-consultar-filme',
  templateUrl: './consultar-filme.component.html',
  styleUrls: ['./consultar-filme.component.css']
})
export class ConsultarFilmeComponent implements OnInit {

  id: number;

  filme: Filme;

  constructor(private filmeService: FilmeService) {
    this.filmeService = filmeService;
   }

  ngOnInit(): void {
  }

  consultarFilme() {
    this.filmeService.consultarFilme(this.id).subscribe(data => {
      this.filme = data;
    })
  }
}
