import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs';
import { User } from './user'
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.user = angularFireAuth.authState;
   }
   createUser(user: User) {
     return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
   }

   signIn(user: User) {
     return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
   }

   signOut() {
     return this.angularFireAuth.auth.signOut();
   }

   resetPassword(email: string) {
     return this.angularFireAuth.auth.sendPasswordResetEmail(email);
   }
}
