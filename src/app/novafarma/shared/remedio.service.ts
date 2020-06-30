import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Remedio } from './remedio';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RemedioService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(remedio: Remedio) {
    this.db.list('remedio').push(remedio)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(remedio: Remedio, key: string) {
    this.db.list('remedio').update(key, remedio)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('remedio')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`remedio/${key}`).remove();
  }

  
}
 