import { Injectable } from '@angular/core';
import { MovimentacaoApiModel } from '../models/movimentacao-api-model';
import { Store } from '../../core/models/store';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovimentacaoService extends Store<MovimentacaoApiModel[]> {

  constructor(private http: HttpClient) {
    super([]);
  }

  /**
   * load
   */
  public load(): void {
    this.http.get<MovimentacaoApiModel[]>('http://localhost:3000/movimentacao').
      subscribe({
        next: (data) => { this.setState(data) },
        error: (err) => { console.log(err) }
      });
  }

}
