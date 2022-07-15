import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiteratureDbPage } from './literature-db.page';

const routes: Routes = [
  {
    path: '',
    component: LiteratureDbPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiteratureDbPageRoutingModule {}
