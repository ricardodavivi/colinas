import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Produto } from './produto';
import { map } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  
  constructor(private db: AngularFireDatabase, 
    public toastController: ToastController) { }
  
  insert(produto: Produto) {
    this.db.list('produto').push(produto)
      .then((result: any) => {
        console.log(result.key);
      });
  } 
 
  update(produto: Produto, key: string) {
    this.db.list('produto').update(key, produto)
      .catch((error: any) => {
        console.error(error);
      });
  }
 
  getAll() {
    return this.db.list<any[]>('produto')
    .snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
      
  } 
 
  delete(key: string) {
    this.db.object(`produto/${key}`).remove();
  }

  
}
