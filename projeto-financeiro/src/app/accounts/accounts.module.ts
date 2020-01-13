import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentacaoComponent } from './components/movimentacao/movimentacao.component';
import { ContaDetalhesPageComponent } from './pages/conta-detalhes-page/conta-detalhes-page.component';
import { MovimentacaoService } from './services/movimentacao.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [MovimentacaoComponent, ContaDetalhesPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers : [
    MovimentacaoService
  ]
})
export class AccountsModule { }
