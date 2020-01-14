import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from '../../services/movimentacao.service';
import { MovimentacaoApiModel } from '../../models/movimentacao-api-model';

@Component({
  selector: 'app-conta-detalhes-page',
  templateUrl: './conta-detalhes-page.component.html',
  styleUrls: ['./conta-detalhes-page.component.scss']
})
export class ContaDetalhesPageComponent implements OnInit {

  entradas: MovimentacaoApiModel[] = [];
  saidas: MovimentacaoApiModel[] = [];
  saldo: number = 0;

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit() {
    this.movimentacaoService.getEntradas().
      subscribe(entrada => {
        this.entradas = entrada;
        
        this.movimentacaoService.getSaidas().
          subscribe(saida => {
            this.saidas = saida;

            this.saldo = 0;

            this.entradas.forEach((entr) => this.saldo += entr.valor);
            this.saidas.forEach((sai) => this.saldo -= sai.valor);
          })

      });

    this.movimentacaoService.getSaidas().
      subscribe(saida => this.saidas = saida)
    //console.log(this.saidas);

  }

}
