import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Ferramenta } from './ferramenta';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FerramentaService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(ferramenta: Ferramenta) {
    this.db.list('ferramenta').push(ferramenta)
      .then((result: any) => {
        console.log(result.key);
      });
  }
 
  update(ferramenta: Ferramenta, key: string) {
    this.db.list('ferramenta').update(key, ferramenta)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('ferramenta')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`ferramenta/${key}`).remove();
  }
}

