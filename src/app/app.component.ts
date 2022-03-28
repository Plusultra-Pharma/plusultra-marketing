import { ImpressumComponent } from './impressum/impressum.component';
import { ModalController } from '@ionic/angular';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Company', url: '/company', icon: 'home' },
    { title: 'Product', url: '/product', icon: 'gift' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Market', url: '/market', icon: 'pricetags' },
  ];
  public labels = ['Impressum'];

  //constructor() {}
  constructor(private modalCtrl: ModalController) { }

  async openModal() {
              const modal = await this.modalCtrl.create({
                component: ImpressumComponent
              });
  await modal.present();
  }
}