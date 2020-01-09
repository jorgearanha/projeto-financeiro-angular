import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentacaoComponent } from './components/movimentacao/movimentacao.component';
import { ContaDetalhesPageComponent } from './pages/conta-detalhes-page/conta-detalhes-page.component';



@NgModule({
  declarations: [MovimentacaoComponent, ContaDetalhesPageComponent],
  imports: [
    CommonModule
  ]
})
export class AccountsModule { }
