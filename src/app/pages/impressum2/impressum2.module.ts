import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Impressum2PageRoutingModule } from './impressum2-routing.module';

import { Impressum2Page } from './impressum2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Impressum2PageRoutingModule
  ],
  declarations: [Impressum2Page]
})
export class Impressum2PageModule {}
