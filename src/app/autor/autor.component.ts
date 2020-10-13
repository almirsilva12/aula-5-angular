import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autor: {
    nome: string,
    dataNascimento: string
  }
  constructor() {
    this.autor = {
      nome: "James Cameron",
      dataNascimento: "1264-03-06"
    }
  }

  ngOnInit(): void {
  }

}
