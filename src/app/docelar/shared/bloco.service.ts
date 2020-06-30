import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Bloco } from './bloco';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlocoService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(bloco: Bloco) {
    this.db.list('bloco').push(bloco)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(bloco: Bloco, key: string) {
    this.db.list('bloco').update(key, bloco)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('bloco')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`bloco/${key}`).remove();
  }

  
}
  