import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Venda } from './venda';
 
@Injectable({
  providedIn: 'root'
})
export class VendaDataService {
  private produtoSource = new BehaviorSubject({ venda: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(venda: Venda, key: string) {
    this.produtoSource.next({ venda: venda, key: key });
  }
}
