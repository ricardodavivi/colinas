import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  userEmail: string = '';

  constructor(
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthService,
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.resetPassword(this.userEmail)
    .then(() =>{
      this.toast.showSuccess('Pedido enviado com sucesso, veja seu email');
    })
  }

}
