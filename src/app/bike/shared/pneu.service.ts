import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Pneu } from './pneu';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PneuService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(make: Pneu) {
    this.db.list('pneu').push(make)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(make: Pneu, key: string) {
    this.db.list('pneu').update(key, make)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('pneu')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`pneu/${key}`).remove();
  }

  
}
  