import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cel } from './cel';
 
@Injectable({
  providedIn: 'root'
})
export class CelDataService {
  private produtoSource = new BehaviorSubject({ cel: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(cel: Cel, key: string) {
    this.produtoSource.next({ cel: cel, key: key });
  }
}
