import { Injectable } from '@angular/core';
import { Store } from 'src/app/core/models/store';
import { ContaApiModel } from '../models/conta-api-model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContaService extends Store<ContaApiModel[]> {

  constructor(private http: HttpClient) {
    super([]);
  }

  /**
   * load
   */
  public load(): void {
    this.http.get<ContaApiModel[]>('http://localhost:3000/contas').
      subscribe({
        next: (data) => { this.setState(data) },
        error: (err) => { console.log(err) }
      });
  }

}
