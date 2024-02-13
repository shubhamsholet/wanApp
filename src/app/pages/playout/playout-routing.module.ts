import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayoutPage } from './playout.page';

const routes: Routes = [
  {
    path: '',
    component: PlayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayoutPageRoutingModule {}
