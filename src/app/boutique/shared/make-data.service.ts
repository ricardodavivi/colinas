import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Make } from './make';
 
@Injectable({
  providedIn: 'root'
})
export class MakeDataService {
  private produtoSource = new BehaviorSubject({ make: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(make: Make, key: string) {
    this.produtoSource.next({ make: make, key: key });
  }
}
