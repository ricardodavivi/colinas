import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';
import { AlertService } from 'src/app/core/services/alert.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import { FrutaService } from './shared/fruta.service';
import { FrutaDataService } from './shared/fruta-data.service';
import { Fruta } from './shared/fruta';
import { Fruta2 } from './shared/fruta2';
import * as firebase from 'firebase/app'; 
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-beto',
  templateUrl: './beto.page.html',
  styleUrls: ['./beto.page.scss']  
})
export class BetoPage implements OnInit {
  frutas:any;
  fruta: any;
  key: string = '';
  fruta2s:any;
  fruta2: Fruta2;
  key2: string= '';
  tasks :  any[] = [];
  cloudFiles = [];
  

  constructor(private frutaService: FrutaService, 
    private frutaDataService: FrutaDataService,
    private toast: ToastService,
    private alert: AlertService,
    private admobFree: AdMobFree,
    private alertCtrl: AlertController,
    public popoverController: PopoverController
    ) { 
      let tasksJson = localStorage.getItem('tasksDb');
      if (tasksJson != null) {
        this.tasks = JSON.parse(tasksJson);
      }
    }

  async ngOnInit() {  
    this.loadFiles();
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id:'ca-app-pub-9717608211927606/9263592523',
      isTesting:false,
      autoShow: true,
      bannerAtTop:false,
      overlap:true
     }
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare().then(()=>
     { }); 
    this.frutas = this.frutaService.getAll();
    console.log(this.frutas);   
  }  
  showInterstitialAds()
    {
      const bannerConfig:AdMobFreeBannerConfig={
        id:'ca-app-pub-9717608211927606/8201598774',
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
        id:'ca-app-pub-9717608211927606/8201598774',
        isTesting:false,
        autoShow:true,
      }
      this.admobFree.rewardVideo.config(rewardVideoConfig);
      this.admobFree.rewardVideo.prepare().then(()=>
      {
      });
    }    
    
    delete(task: any  ) {
      this.tasks = this.tasks.filter(taskArray => task != taskArray);
      this.updateLocalStorage();
    }

    updateLocalStorage() {
      localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
    }
    async showAdd() {
      const alert = await this.alertCtrl.create({
        header: 'A que conta se refere?',
        inputs: [
          {
            name: 'taskToDo',
            type: 'text',
            placeholder: 'Seu nome:'
          },
          {
            name: 'taskToDo2',
            type: 'number',
            placeholder: 'Quantidade'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'primary',
            handler: () => {            
              console.log('clicked cancel')
            }
          },
          {
            text: 'Adicionar',
            handler: (form) => {
              this.salvarTask(form.taskToDo, form.taskToDo2);
            }
          } 
        ]
      });
      await alert.present();
    }
  
    async salvarTask(taskToDo: string, taskToDo2: string) {
      let task = {
        name: taskToDo, taskToDo2,
        date: new Date(),
        value: this.fruta
      };
      this.tasks.push(task);
      localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
      console.log(task);
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