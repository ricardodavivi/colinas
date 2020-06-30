import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

import { ToastService } from 'src/app/core/services/toast.service';

import { AlertService } from 'src/app/core/services/alert.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

import { FerramentaService } from './shared/ferramenta.service';
import { FerramentaDataService } from './shared/ferramenta-data.service';

@Component({
  selector: 'app-fernandes',
  templateUrl: './fernandes.page.html',
  styleUrls: ['./fernandes.page.scss']  
})
export class FernandesPage implements OnInit {
  ferramentas:any;
  cloudFiles = [];

  constructor(private ferramentaService: FerramentaService, 
    private ferramentaDataService: FerramentaDataService,
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
      id:'ca-app-pub-3940256099942544/6300978111',
      isTesting:false,
      autoShow: true,
      bannerAtTop:false,
      overlap:true
     }
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare().then(()=>
     {

     }); 
    
    

    this.ferramentas = this.ferramentaService.getAll();
    console.log(this.ferramentas);
    
    
    
  }
  delete(ferramenta: any) {
    this.alert.showConfirmDelete(ferramenta.name,() => this.executeRemove(ferramenta));
  }
  private executeRemove(ferramenta: string) {
    this.ferramentaService.delete(ferramenta);
      try {          
        this.toast.showSuccess('Produto removido com sucesso');
      } catch (error) {
        this.toast.showError('Erro ao remover produto');      
      }
  }
  
  showInterstitialAds()
    {
      const bannerConfig:AdMobFreeBannerConfig={
        id:'ca-app-pub-3940256099942544/1033173712',
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
        id:'ca-app-pub-3940256099942544/1033173712',
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