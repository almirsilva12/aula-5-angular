import { Component, OnInit } from '@angular/core';
import { FilmeService } from '../filme.service';
import { Filme } from '../filme/filme.model';

@Component({
  selector: 'app-cadastrar-filmes',
  templateUrl: './cadastrar-filmes.component.html',
  styleUrls: ['./cadastrar-filmes.component.css']
})
export class CadastrarFilmesComponent implements OnInit {

  constructor(private filmeService: FilmeService) {
    this.filmeService = filmeService;
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    let filme: Filme;

    filme = {
      nome: form.value.nome,
      genero: form.value.genero,
      ano: form.value.ano,
      autor: {
        nome: form.value.autorNome,
        dataNascimento: form.value.dataNascimento
      }
    }

    this.filmeService.cadastrarFilme(filme).subscribe(data => {
      console.log("Cadastrado com sucesso");
      console.log(data);
    })



  }

}
