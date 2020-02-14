import { Component, OnInit, Input } from '@angular/core';
import { MovimentacaoApiModel } from '../../models/movimentacao-api-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit{
  
  @Input() movimentacao: MovimentacaoApiModel;
  
  esta_atrasado: boolean;
  esta_pago: boolean;
  
  constructor() {}
  
  ngOnInit() {
    this.esta_pago = this.movimentacao.data_fim == "" ? false : true;
    this.esta_atrasado = !this.esta_pago
    && Date.now() > Date.parse(this.movimentacao.data_venc);
  }

}
