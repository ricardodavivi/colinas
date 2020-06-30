import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Conviteria } from './conviteria';
 
@Injectable({
  providedIn: 'root'
})
export class ConviteriaDataService {
  private produtoSource = new BehaviorSubject({ conviteria: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(conviteria: Conviteria, key: string) {
    this.produtoSource.next({ conviteria: conviteria, key: key });
  }
}
