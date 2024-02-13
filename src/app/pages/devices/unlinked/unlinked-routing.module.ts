import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnlinkedPage } from './unlinked.page';

const routes: Routes = [
  {
    path: '',
    component: UnlinkedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnlinkedPageRoutingModule {}
