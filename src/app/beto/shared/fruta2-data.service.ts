import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fruta2 } from './fruta2';
 
@Injectable({
  providedIn: 'root'
})
export class Fruta2DataService {
  private produtoSource = new BehaviorSubject({ fruta2: null, key2: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto2(fruta2: Fruta2, key2: string) {
    this.produtoSource.next({ fruta2: fruta2, key2: key2 });
  }
}
