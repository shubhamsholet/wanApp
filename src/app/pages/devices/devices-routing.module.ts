import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DevicesPage } from './devices.page';

const routes: Routes = [
  {
    path: '',
    component: DevicesPage,
    children: [
      {
        path: 'linked',
        loadChildren: () => import('./linked/linked.module').then(m => m.LinkedPageModule)
      },
      {
        path: 'unlinked',
        loadChildren: () => import('./unlinked/unlinked.module').then(m => m.UnlinkedPageModule)
      },
      {
        path: '',
        redirectTo: 'linked',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesPageRoutingModule { }
