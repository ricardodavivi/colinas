
import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  imagem: any;

  constructor(public popoverController: PopoverController,
    private navParams: NavParams
    ) { }

  ngOnInit() {
    this.imagem = this.navParams.data.myImagem;
    console.log('entrou aqui: ', this.imagem);
  }

  

}
