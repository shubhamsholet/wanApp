import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MasterPlaylistPageRoutingModule } from './master-playlist-routing.module';

import { MasterPlaylistPage } from './master-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasterPlaylistPageRoutingModule
  ],
  declarations: [MasterPlaylistPage]
})
export class MasterPlaylistPageModule {}
