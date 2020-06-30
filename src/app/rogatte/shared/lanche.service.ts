import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Lanche } from './lanche';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LancheService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(lanche: Lanche) {
    this.db.list('lanche').push(lanche)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(lanche: Lanche, key: string) {
    this.db.list('lanche').update(key, lanche)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('lanche')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`lanche/${key}`).remove();
  }

  
}
  