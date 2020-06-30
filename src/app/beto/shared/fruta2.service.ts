import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Fruta2 } from './fruta2';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Fruta2Service {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(fruta2: Fruta2) {
    this.db.list('fruta2').push(fruta2)
      .then((result: any) => {
        console.log(result.key2);
      });
  }
 
  update(fruta2: Fruta2, key2: string) {
    this.db.list('fruta2').update(key2, fruta2)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('fruta2')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key2: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key2: string) {
    this.db.object(`fruta2/${key2}`).remove();
  }
}

