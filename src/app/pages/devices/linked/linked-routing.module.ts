import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinkedPage } from './linked.page';

const routes: Routes = [
  {
    path: '',
    component: LinkedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LinkedPageRoutingModule {}
