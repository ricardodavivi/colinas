import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Fruta } from './fruta';
 
@Injectable({
  providedIn: 'root'
})
export class FrutaDataService {
  private produtoSource = new BehaviorSubject({ fruta: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(fruta: Fruta, key: string) {
    this.produtoSource.next({ fruta: fruta, key: key });
  }
}
