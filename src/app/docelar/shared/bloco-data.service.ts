import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bloco } from './bloco';
 
@Injectable({
  providedIn: 'root'
})
export class BlocoDataService {
  private produtoSource = new BehaviorSubject({ bloco: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(bloco: Bloco, key: string) {
    this.produtoSource.next({ bloco: bloco, key: key });
  }
}
