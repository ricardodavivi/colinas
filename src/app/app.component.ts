import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Supermercado Visa',
      url: '/list',
      icon: 'cart'
    },
    {
      title: 'Quitanda do Beto',
      url: '/beto',
      icon: 'trail-sign'
    },
    {
      title: 'JD rações',
      url: '/jd',
      icon: 'paw'
    },
    {
      title: 'Alessandra Convitería',
      url: '/alessandra',
      icon: 'gift'
    },
    {
      title: 'Flávia Presentes',
      url: '/flavia',
      icon: 'gift'
    },
    {
      title: 'Padaria Pão de Mel',
      url: '/paodemel',
      icon: 'fast-food'
    },
    {
      title: 'Mauricio Estofados',
      url: '/estofados',
      icon: 'people'
    },
    {
      title: 'Pizzaria Rogatte',
      url: '/rogatte',
      icon: 'pizza'
    },
    {
      title: 'Boutique Adriana',
      url: '/boutique',
      icon: 'apps'
    },
    {
      title: 'TecLíder',
      url: '/teclider',
      icon: 'phone-portrait'
    },
    {
      title: 'Empórios Marcelo',
      url: '/emporio',
      icon: 'gift'
    },
    {
      title: 'Nova Farma',
      url: '/novafarma',
      icon: 'bandage'
    },
    {
      title: 'Kuriango',
      url: '/kuriango',
      icon: 'beer'
    },
    {
      title: 'Casa Fernandes',
      url: '/fernandes',
      icon: 'build'
    },
    {
      title: 'MGR Moveis',
      url: '/mgr',
      icon: 'home'
    },    
    
    
    
    {
      title: 'Real Bike',
      url: '/bike',
      icon: 'bicycle'
    },
    
    {
      title: 'Conveniência da Dany',
      url: '/luciano',
      icon: 'cart'
    },
    {
      title: 'Docelar',
      url: '/docelar',
      icon: 'build'
    },
    
    {
      title: 'Delícias da Flávia',
      url: '/delicias',
      icon: 'rose'
    },
    
    
    
  ];
  public labels = [];
  rootPage: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    afAuth: AngularFireAuth,
    public navCtrl: NavController
  ) {

    const authObserver = afAuth.authState.subscribe(user => {
      if (user) {
        this.navCtrl.navigateRoot(['/home']);
        authObserver.unsubscribe();
      }else{
        this.navCtrl.navigateRoot(['/login']);
        authObserver.unsubscribe();
      }
    })
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
