import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmeComponent } from './filme/filme.component';
import { AutorComponent } from './autor/autor.component';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarFilmesComponent } from './cadastrar-filmes/cadastrar-filmes.component';
import { FormsModule } from '@angular/forms';
import { FilmeService } from './filme.service';
import { ConsultarFilmeComponent } from './consultar-filme/consultar-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    AutorComponent,
    CadastrarFilmesComponent,
    ConsultarFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
