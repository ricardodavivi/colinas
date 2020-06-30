import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Moveis } from './moveis';
 
@Injectable({
  providedIn: 'root'
})
export class MoveisDataService {
  private produtoSource = new BehaviorSubject({ moveis: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(moveis: Moveis, key: string) {
    this.produtoSource.next({ moveis: moveis, key: key });
  }
}
