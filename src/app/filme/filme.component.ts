import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  filme: {
    nome: string,
    ano: number
  }

  constructor() {
    this.filme = {
      nome: "Titanic",
      ano: 1999
    }
    // this.nome = "Titanic";
    // this.ano = 2000;
  }

  ngOnInit(): void {
    this.filme = {
      nome: "Avatar",
      ano: 2011
    }
  }

}
