import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersPage } from './users.page';

const routes: Routes = [
  {
    path: '',
    component: UsersPage,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./client/client.module').then(m => m.ClientPageModule)
      },
      {
        path: 'advertiser',
        loadChildren: () => import('./advertiser/advertiser.module').then(m => m.AdvertiserPageModule)
      },
      {
        path: 'agency',
        loadChildren: () => import('./agency/agency.module').then(m => m.AgencyPageModule)
      },
      {
        path: 'manager',
        loadChildren: () => import('./manager/manager.module').then(m => m.ManagerPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
      },
      {
        path: '',
        redirectTo: 'client',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersPageRoutingModule { }
