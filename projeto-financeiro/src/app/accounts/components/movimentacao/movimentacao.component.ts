import { Component, OnInit, Input } from '@angular/core';
import { MovimentacaoApiModel } from '../../models/movimentacao-api-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent implements OnInit {

  @Input() movimentacao: MovimentacaoApiModel;

  constructor() { }

  ngOnInit() {

    
  }

}
