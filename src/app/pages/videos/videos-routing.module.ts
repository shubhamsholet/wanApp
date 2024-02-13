import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideosPage } from './videos.page';

const routes: Routes = [
  {
    path: '',
    component: VideosPage,
    children: [
      {
        path: 'general',
        loadChildren: () => import('./general/general.module').then(m => m.GeneralPageModule)
      },
      {
        path: 'doctor',
        loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorPageModule)
      },
      {
        path: 'ads',
        loadChildren: () => import('./ads/ads.module').then(m => m.AdsPageModule)
      },
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideosPageRoutingModule { }
