import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Sushi } from './sushi';
 
@Injectable({
  providedIn: 'root'
})
export class SushiDataService {
  private produtoSource = new BehaviorSubject({ sushi: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(sushi: Sushi, key: string) {
    this.produtoSource.next({ sushi: sushi, key: key });
  }
}
