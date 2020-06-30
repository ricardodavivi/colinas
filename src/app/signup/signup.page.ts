import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../services/auth/user'
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  user: User = new User();  

  constructor(public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService:AuthService,
    private toast: ToastService) { }

  ngOnInit() {
  }

  createAcount() {
     {     
      this.authService.createUser(this.user)
      .then((user: any) =>{
        this.toast.showSuccess('Criado com sucesso');
        this.navCtrl.navigateRoot(['/home']);
      })
      .catch((error: any) =>{
        if (error.code == '') {
          this.toast.showError('Erro ao cadastrar');
        }
      });
    }
    
  }

} 
