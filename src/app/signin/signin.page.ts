import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { ToastService } from '../core/services/toast.service';
import { User } from '../services/auth/user'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  user: User = new User();

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService:AuthService,
    private toast: ToastService) { }

  ngOnInit() {
  }
  signIn() {
    {     
     this.authService.signIn(this.user)
     .then((user: any) =>{
       this.toast.showSuccess('Logado com sucesso');
       this.navCtrl.navigateRoot(['/home']);
     })
     .catch((error: any) =>{
       if (error.code == '') {
         this.toast.showError('Não deu.');
       }
     });
   }
   
 }

}
