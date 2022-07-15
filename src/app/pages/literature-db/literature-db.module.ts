import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiteratureDbPageRoutingModule } from './literature-db-routing.module';

import { LiteratureDbPage } from './literature-db.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiteratureDbPageRoutingModule
  ],
  declarations: [LiteratureDbPage]
})
export class LiteratureDbPageModule {}
