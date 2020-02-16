import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaDetalhesPageComponent } from './accounts/pages/conta-detalhes-page/conta-detalhes-page.component';
import { AppLayoutComponent } from './core/app-main-layout/app-layout/app-layout.component';


const routes: Routes = [{
  path: '',
  component: AppLayoutComponent,
  children: [{
    path: 'movimentacoes', component: ContaDetalhesPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
