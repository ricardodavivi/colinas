import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { RemedioDataService } from './shared/remedio-data.service';
import { RemedioService } from './shared/remedio.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import * as firebase from 'firebase/app';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-novafarma',
  templateUrl: './novafarma.page.html',
  styleUrls: ['./novafarma.page.scss'] 
})
export class NovafarmaPage implements OnInit {
  remedios:any;
  cloudFiles = [];

  constructor(private remedioService: RemedioService, 
    private remedioDataService: RemedioDataService,
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

    this.remedios = this.remedioService.getAll();
  }
  delete(remedio: any) {
    this.alert.showConfirmDelete(remedio.name,() => this.executeRemove(remedio));
  }
  private executeRemove(remedio: string) {
    this.remedioService.delete(remedio);
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
