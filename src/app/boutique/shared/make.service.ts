import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Make } from './make';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MakeService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(make: Make) {
    this.db.list('make').push(make)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(make: Make, key: string) {
    this.db.list('make').update(key, make)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('make')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`make/${key}`).remove();
  }

  
}
  