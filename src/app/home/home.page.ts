import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import { Push, PushOptions, PushObject } from '@ionic-native/push/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController,
    private authService: AuthService, private admobFree: AdMobFree, private push:Push) {
      
   
  }
     

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
     { });
  }

  adItem() {

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
     { });

  }
  

  signOut() {
    this.authService.signOut()
       .then(()=> {
         this.navCtrl.navigateRoot(['/signin'])
       })
       .catch((error)=>{
         console.error(error)
       });
  }

}
