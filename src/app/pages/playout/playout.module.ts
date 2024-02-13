import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayoutPageRoutingModule } from './playout-routing.module';

import { PlayoutPage } from './playout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayoutPageRoutingModule
  ],
  declarations: [PlayoutPage]
})
export class PlayoutPageModule {}
