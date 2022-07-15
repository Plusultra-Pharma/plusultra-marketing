import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Impressum2Page } from './impressum2.page';

const routes: Routes = [
  {
    path: '',
    component: Impressum2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Impressum2PageRoutingModule {}
