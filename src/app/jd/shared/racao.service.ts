import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Racao } from './racao';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RacaoService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
 
  insert(racao: Racao) {
    this.db.list('racao').push(racao)
      .then((result: any) => {
        console.log(result.key);
      });
  }
 
  update(racao: Racao, key: string) {
    this.db.list('racao').update(key, racao)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('racao')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`racao/${key}`).remove();
  }
}

