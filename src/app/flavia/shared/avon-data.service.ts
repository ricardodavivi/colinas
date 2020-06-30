import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Avon } from './avon';
 
@Injectable({
  providedIn: 'root'
})
export class AvonDataService {
  private produtoSource = new BehaviorSubject({ avon: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(avon: Avon, key: string) {
    this.produtoSource.next({ avon: avon, key: key });
  }
}
