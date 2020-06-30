import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pao } from './pao';
 
@Injectable({
  providedIn: 'root'
})
export class PaoDataService {
  private produtoSource = new BehaviorSubject({ pao: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(pao: Pao, key: string) {
    this.produtoSource.next({ pao: pao, key: key });
  }
}
