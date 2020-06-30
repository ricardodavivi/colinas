import { Component, OnInit } from '@angular/core';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
@Component({
  selector: 'app-megapromocao',
  templateUrl: './megapromocao.page.html',
  styleUrls: ['./megapromocao.page.scss'],
})
export class MegapromocaoPage implements OnInit {

  constructor(private admobFree: AdMobFree) { }

  ngOnInit() {

    
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
  showAdMobFreeRewardVideoAds()
    {
      const rewardVideoConfig:AdMobFreeRewardVideoConfig=
      {
        id:'ca-app-pub-9717608211927606/8710942652',
        isTesting:false,
        autoShow:true,
      }
      this.admobFree.rewardVideo.config(rewardVideoConfig);
      this.admobFree.rewardVideo.prepare().then(()=>
      {

      });
    }

}
