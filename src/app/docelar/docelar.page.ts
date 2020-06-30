import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { BlocoService } from './shared/bloco.service';
import { BlocoDataService } from './shared/bloco-data.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import * as firebase from 'firebase/app';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
@Component({
  selector: 'app-docelar',
  templateUrl: './docelar.page.html',
  styleUrls: ['./docelar.page.scss']
})
export class DocelarPage implements OnInit {
  blocos:any;
  cloudFiles = [];

  constructor(private blocoService: BlocoService, 
    private blocoDataService: BlocoDataService,
    private toast: ToastService,
    private alert: AlertService,
    private admobFree: AdMobFree,
    public popoverController: PopoverController) { }

  ngOnInit() {
    this.loadFiles();
    this.blocos = this.blocoService.getAll();
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id:'ca-app-pub-9717608211927606/3370437326',
      isTesting:false,
      autoShow: true,
      bannerAtTop:false,
      overlap:true
     }
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare().then(()=>
     {

     });
  }
  delete(bloco: any) {
    this.alert.showConfirmDelete(bloco.name,() => this.executeRemove(bloco));
  }
  private executeRemove(bloco: string) {
    this.blocoService.delete(bloco);
      try {          
        this.toast.showSuccess('Produto removido com sucesso');
      } catch (error) {
        this.toast.showError('Erro ao remover produto');      
      }
  }
  loadFiles() {
    this.cloudFiles = [];
 
    const storageRef = firebase.storage().ref('files');
    storageRef.listAll().then(result => {
      result.items.forEach(async ref => {
        this.cloudFiles.push({
          name: ref.name,
          full: ref.fullPath,
          url: await ref.getDownloadURL(),
          ref: ref
        });
      });
    });
  }
  async abrirPhoto(ev: any, imagem: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent, // `<ion-img [src]="${imagem}"></ion-img>`
      cssClass: 'my-custom-class',
      event: ev,
      componentProps: {'myImagem': imagem },
      translucent: true
    });
    return await popover.present();
  }
} 
 