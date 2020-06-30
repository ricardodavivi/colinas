import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { ToastService } from 'src/app/core/services/toast.service';

import { AlertService } from 'src/app/core/services/alert.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

import { RacaoService } from './shared/racao.service';
import { RacaoDataService } from './shared/racao-data.service';

@Component({
  selector: 'app-jd',
  templateUrl: './jd.page.html',
  styleUrls: ['./jd.page.scss']  
})
export class JdPage implements OnInit {
  racaos:any;
  cloudFiles = [];

  constructor(private racaoService: RacaoService, 
    private racaoDataService: RacaoDataService,
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
      id:'ca-app-pub-9717608211927606/7653081667',
      isTesting:false,
      autoShow: true,
      bannerAtTop:false,
      overlap:true
     }
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare().then(()=>
     {

     }); 
    
    

    this.racaos = this.racaoService.getAll();
    console.log(this.racaos);
    
    
    
  }
  delete(racao: any) {
    this.alert.showConfirmDelete(racao.name,() => this.executeRemove(racao));
  }
  private executeRemove(racao: string) {
    this.racaoService.delete(racao);
      try {          
        this.toast.showSuccess('Produto removido com sucesso');
      } catch (error) {
        this.toast.showError('Erro ao remover produto');      
      }
  }
  
  showInterstitialAds()
    {
      const bannerConfig:AdMobFreeBannerConfig={
        id:'ca-app-pub-9717608211927606/3791580475',
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
        id:'ca-app-pub-9717608211927606/3791580475',
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