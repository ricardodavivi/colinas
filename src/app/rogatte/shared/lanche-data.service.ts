import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lanche } from './lanche';
 
@Injectable({
  providedIn: 'root'
})
export class LancheDataService {
  private produtoSource = new BehaviorSubject({ lanche: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(lanche: Lanche, key: string) {
    this.produtoSource.next({ lanche: lanche, key: key });
  }
}
