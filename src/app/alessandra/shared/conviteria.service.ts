import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Conviteria } from './conviteria';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConviteriaService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(conviteria: Conviteria) {
    this.db.list('conviteria').push(conviteria)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(conviteria: Conviteria, key: string) {
    this.db.list('conviteria').update(key, conviteria)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('conviteria')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`conviteria/${key}`).remove();
  }

  
}
  