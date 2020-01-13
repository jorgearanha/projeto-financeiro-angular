import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from '../../services/movimentacao.service';
import { MovimentacaoApiModel } from '../../models/movimentacao-api-model';

@Component({
  selector: 'app-conta-detalhes-page',
  templateUrl: './conta-detalhes-page.component.html',
  styleUrls: ['./conta-detalhes-page.component.scss']
})
export class ContaDetalhesPageComponent implements OnInit {

  movimentacoes: MovimentacaoApiModel[];

  constructor(private movimentacaoService: MovimentacaoService) {
    movimentacaoService.load();
  }

  ngOnInit() {
    this.movimentacaoService.state$.
      subscribe( dados => {
        this.movimentacoes = dados;
      });
  }

}
