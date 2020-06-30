import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Fruta } from './fruta';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FrutaService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(fruta: Fruta) {
    this.db.list('fruta').push(fruta)
      .then((result: any) => {
        console.log(result.key);
      });
  }
 
  update(fruta: Fruta, key: string) {
    this.db.list('fruta').update(key, fruta)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('fruta')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`fruta/${key}`).remove();
  }
}

