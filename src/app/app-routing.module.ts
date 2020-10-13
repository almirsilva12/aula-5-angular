import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarFilmesComponent } from './cadastrar-filmes/cadastrar-filmes.component';
import { ConsultarFilmeComponent } from './consultar-filme/consultar-filme.component';

const routes: Routes = [
  {path: "consultar-filme", component: ConsultarFilmeComponent},
  {path: "cadastrar-filmes", component: CadastrarFilmesComponent},
  {path: "**", component: ConsultarFilmeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
