import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ferramenta } from './ferramenta';
 
@Injectable({
  providedIn: 'root'
})
export class FerramentaDataService {
  private produtoSource = new BehaviorSubject({ ferramenta: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(ferramenta: Ferramenta, key: string) {
    this.produtoSource.next({ ferramenta: ferramenta, key: key });
  }
}
