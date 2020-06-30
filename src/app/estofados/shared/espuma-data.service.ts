import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Espuma } from './espuma';
 
@Injectable({
  providedIn: 'root'
})
export class EspumaDataService {
  private produtoSource = new BehaviorSubject({ espuma: null, key: '' });
  currentProduto = this.produtoSource.asObservable();
 
  constructor() { }
 
  changeProduto(espuma: Espuma, key: string) {
    this.produtoSource.next({ espuma: espuma, key: key });
  }
}
