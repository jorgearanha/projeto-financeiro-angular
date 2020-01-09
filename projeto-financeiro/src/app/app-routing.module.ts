import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaDetalhesPageComponent } from './accounts/pages/conta-detalhes-page/conta-detalhes-page.component';


const routes: Routes = [{
  path: '',
  children: [{
    path: '', component: ContaDetalhesPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
