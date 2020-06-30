import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Moveis } from './moveis';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoveisService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(moveis: Moveis) {
    this.db.list('moveis').push(moveis)
      .then((result: any) => {
        console.log(result.key);
      });
  }
 
  update(moveis: Moveis, key: string) {
    this.db.list('moveis').update(key, moveis)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('moveis')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`moveis/${key}`).remove();
  }
}

