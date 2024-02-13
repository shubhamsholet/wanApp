import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignPage } from './campaign.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignPage,
    children: [
      {
        path: 'active',
        loadChildren: () => import('./active/active.module').then(m => m.ActivePageModule)
      },
      {
        path: 'expired',
        loadChildren: () => import('./expired/expired.module').then(m => m.ExpiredPageModule)
      },
      {
        path: '',
        redirectTo: 'active',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignPageRoutingModule { }
