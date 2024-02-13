import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistsPage } from './playlists.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistsPage,
    children: [
      {
        path: 'master-playlist',
        loadChildren: () => import('./master-playlist/master-playlist.module').then(m => m.MasterPlaylistPageModule)
      },
      {
        path: 'child-playlist',
        loadChildren: () => import('./child-playlist/child-playlist.module').then(m => m.ChildPlaylistPageModule)
      },
      {
        path: '',
        redirectTo: 'master-playlist',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistsPageRoutingModule { }
