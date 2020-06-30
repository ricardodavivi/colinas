import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Avon } from './avon';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvonService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(avon: Avon) {
    this.db.list('avon').push(avon)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(avon: Avon, key: string) {
    this.db.list('avon').update(key, avon)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('avon')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`avon/${key}`).remove();
  }

  
}
  