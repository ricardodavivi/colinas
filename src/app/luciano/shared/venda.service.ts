import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Venda } from './venda';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VendaService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(venda: Venda) {
    this.db.list('venda').push(venda)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(venda: Venda, key: string) {
    this.db.list('venda').update(key, venda)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('venda')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`venda/${key}`).remove();
  }

  
}
  