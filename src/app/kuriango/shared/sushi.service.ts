import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Sushi } from './sushi';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SushiService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(sushi: Sushi) {
    this.db.list('sushi').push(sushi)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(sushi: Sushi, key: string) {
    this.db.list('sushi').update(key, sushi)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('sushi')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`sushi/${key}`).remove();
  }

  
}
  