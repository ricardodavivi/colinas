import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Racao } from './racao';
 
@Injectable({
  providedIn: 'root'
})
export class RacaoDataService {
  private produtoSource = new BehaviorSubject({ racao: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(racao: Racao, key: string) {
    this.produtoSource.next({ racao: racao, key: key });
  }
}
