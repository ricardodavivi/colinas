import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ToastService } from 'src/app/core/services/toast.service';

import { AlertService } from 'src/app/core/services/alert.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

import { PaoService } from './shared/pao.service';
import { PaoDataService } from './shared/pao-data.service';

@Component({
  selector: 'app-paodemel',
  templateUrl: './paodemel.page.html',
  styleUrls: ['./paodemel.page.scss']  
})
export class PaodemelPage implements OnInit {
  paos:any;
  cloudFiles = [];

  constructor(private paoService: PaoService, 
    private paoDataService: PaoDataService,
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
      id:'ca-app-pub-9717608211927606/6513661324',
      isTesting:false,
      autoShow: true,
      bannerAtTop:false,
      overlap:true
     }
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare().then(()=>
     {

     }); 
    
    

    this.paos = this.paoService.getAll();
    console.log(this.paos);
    
    
    
  }
  delete(pao: any) {
    this.alert.showConfirmDelete(pao.name,() => this.executeRemove(pao));
  }
  private executeRemove(pao: string) {
    this.paoService.delete(pao);
      try {          
        this.toast.showSuccess('Produto removido com sucesso');
      } catch (error) {
        this.toast.showError('Erro ao remover produto');      
      }
  }
  
  showInterstitialAds()
    {
      const bannerConfig:AdMobFreeBannerConfig={
        id:'ca-app-pub-9717608211927606/1151537905',
        isTesting: false,
        autoShow:true,
      }
      this.admobFree.interstitial.config(bannerConfig);
      this.admobFree.interstitial.prepare().then(()=>{

      });
    }

    showAdMobFreeRewardVideoAds()
    {
      const rewardVideoConfig:AdMobFreeRewardVideoConfig=
      {
        id:'ca-app-pub-9717608211927606/1151537905',
        isTesting:false,
        autoShow:true,
      }
      this.admobFree.rewardVideo.config(rewardVideoConfig);
      this.admobFree.rewardVideo.prepare().then(()=>
      {

      });
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