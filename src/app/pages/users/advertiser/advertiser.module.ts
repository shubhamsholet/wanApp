import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertiserPageRoutingModule } from './advertiser-routing.module';

import { AdvertiserPage } from './advertiser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertiserPageRoutingModule
  ],
  declarations: [AdvertiserPage]
})
export class AdvertiserPageModule {}
