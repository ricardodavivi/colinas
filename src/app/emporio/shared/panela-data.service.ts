import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Panela } from './panela';
 
@Injectable({
  providedIn: 'root'
})
export class PanelaDataService {
  private produtoSource = new BehaviorSubject({ panela: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(panela: Panela, key: string) {
    this.produtoSource.next({ panela: panela, key: key });
  }
}
 