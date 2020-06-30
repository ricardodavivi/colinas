import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { PanelaDataService } from './shared/panela-data.service';
import { PanelaService } from './shared/panela.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import * as firebase from 'firebase/app';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-emporio',
  templateUrl: './emporio.page.html',
  styleUrls: ['./emporio.page.scss'] 
})
export class EmporioPage implements OnInit {
  panelas:any;
  cloudFiles = [];

  constructor(private panelaService: PanelaService, 
    private panelaDataService: PanelaDataService,
    private toast: ToastService,
    private alert: AlertService,
    private admobFree: AdMobFree,
    public popoverController: PopoverController
    ) { }

  ngOnInit() {
    this.loadFiles();
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

    this.panelas = this.panelaService.getAll();
  }
  delete(panela: any) {
    this.alert.showConfirmDelete(panela.name,() => this.executeRemove(panela));
  }
  private executeRemove(panela: string) {
    this.panelaService.delete(panela);
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
