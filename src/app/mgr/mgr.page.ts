import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { PopoverController } from '@ionic/angular';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/core/services/alert.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import { PopoverComponent } from './popover/popover.component';

import { MoveisService } from './shared/moveis.service';
import { MoveisDataService } from './shared/moveis-data.service';

@Component({
  selector: 'app-mgr',
  templateUrl: './mgr.page.html',
  styleUrls: ['./mgr.page.scss']  
})
export class MgrPage implements OnInit {
  moveiss:any;
  cloudFiles = [];

  constructor(private moveisService: MoveisService, 
    private moveisDataService: MoveisDataService,
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
      id:'ca-app-pub-9717608211927606/5359527602',
      isTesting:false,
      autoShow: true,
      bannerAtTop:false,
      overlap:true
     }
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare().then(()=>
     {

     }); 
    
    

    this.moveiss = this.moveisService.getAll();
    console.log(this.moveiss);
    
    
    
  }
  delete(moveis: any) {
    this.alert.showConfirmDelete(moveis.name,() => this.executeRemove(moveis));
  }
  private executeRemove(moveis: string) {
    this.moveisService.delete(moveis);
      try {          
        this.toast.showSuccess('Produto removido com sucesso');
      } catch (error) {
        this.toast.showError('Erro ao remover produto');      
      }
  }
  
  showInterstitialAds()
    {
      const bannerConfig:AdMobFreeBannerConfig={
        id:'ca-app-pub-9717608211927606/2733364268',
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
        id:'ca-app-pub-9717608211927606/2733364268',
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