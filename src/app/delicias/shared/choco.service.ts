import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Choco } from './choco';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChocoService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(choco: Choco) {
    this.db.list('choco').push(choco)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(choco: Choco, key: string) {
    this.db.list('choco').update(key, choco)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('choco')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`choco/${key}`).remove();
  }

  
}
  