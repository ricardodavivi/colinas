import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pneu } from './pneu';
 
@Injectable({
  providedIn: 'root'
})
export class PneuDataService {
  private produtoSource = new BehaviorSubject({ pneu: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(pneu: Pneu, key: string) {
    this.produtoSource.next({ pneu: pneu, key: key });
  }
}
