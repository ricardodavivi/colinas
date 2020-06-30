import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Espuma } from './espuma';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EspumaService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(make: Espuma) {
    this.db.list('espuma').push(make)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(make: Espuma, key: string) {
    this.db.list('espuma').update(key, make)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('espuma')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`espuma/${key}`).remove();
  }

  
}
  