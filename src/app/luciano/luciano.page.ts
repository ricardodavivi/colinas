import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';
import { AlertService } from 'src/app/core/services/alert.service';
import { VendaService } from './shared/venda.service';
import { VendaDataService } from './shared/venda-data.service';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeRewardVideoConfig,  } from '@ionic-native/admob-free/ngx';
import * as firebase from 'firebase/app';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';
@Component({
  selector: 'app-luciano',
  templateUrl: './luciano.page.html',
  styleUrls: ['./luciano.page.scss']
})
export class LucianoPage implements OnInit {
  vendas:any;
  cloudFiles = [];

  constructor(private vendaService: VendaService, 
    private vendaDataService: VendaDataService,
    private toast: ToastService,
    private alert: AlertService,
    private admobFree: AdMobFree, 
    public popoverController: PopoverController) { }

  ngOnInit() {
    this.loadFiles();
    this.vendas = this.vendaService.getAll();
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
  delete(venda: any) {
    this.alert.showConfirmDelete(venda.name,() => this.executeRemove(venda));
  }
  private executeRemove(venda: string) {
    this.vendaService.delete(venda);
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
 