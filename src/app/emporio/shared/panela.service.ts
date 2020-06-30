import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Panela } from './panela';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PanelaService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(panela: Panela) {
    this.db.list('panela').push(panela)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(panela: Panela, key: string) {
    this.db.list('panela').update(key, panela)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('panela')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`panela/${key}`).remove();
  }

  
}
 