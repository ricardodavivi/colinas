import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Choco } from './choco';
 
@Injectable({
  providedIn: 'root'
})
export class ChocoDataService {
  private produtoSource = new BehaviorSubject({ choco: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(choco: Choco, key: string) {
    this.produtoSource.next({ choco: choco, key: key });
  }
}
