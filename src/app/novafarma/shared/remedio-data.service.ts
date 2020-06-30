import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Remedio } from './remedio';
 
@Injectable({
  providedIn: 'root'
})
export class RemedioDataService {
  private produtoSource = new BehaviorSubject({ remedio: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(remedio: Remedio, key: string) {
    this.produtoSource.next({ remedio: remedio, key: key });
  }
}
 