import { Injectable } from '@angular/core';
import { MovimentacaoApiModel } from '../models/movimentacao-api-model';
import { Store } from '../../core/models/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  /**
   * getEntradas
   */
  public getEntradas(): Observable<MovimentacaoApiModel[]> {
    // tipoId = 1 é o Id da entrada
    return this.http.get<MovimentacaoApiModel[]>('http://localhost:3000/movimentacao?tipoId=1');
  }

  /**
   * getSaidas
   */
  public getSaidas(): Observable<MovimentacaoApiModel[]> {
    // tipoId = 2 é o Id da saida
    return this.http.get<MovimentacaoApiModel[]>('http://localhost:3000/movimentacao?tipoId=2');
  }

}
