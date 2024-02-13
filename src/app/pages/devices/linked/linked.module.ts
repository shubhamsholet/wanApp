import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LinkedPageRoutingModule } from './linked-routing.module';

import { LinkedPage } from './linked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LinkedPageRoutingModule
  ],
  declarations: [LinkedPage]
})
export class LinkedPageModule {}
