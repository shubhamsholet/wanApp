import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChildPlaylistPageRoutingModule } from './child-playlist-routing.module';

import { ChildPlaylistPage } from './child-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChildPlaylistPageRoutingModule
  ],
  declarations: [ChildPlaylistPage]
})
export class ChildPlaylistPageModule {}
