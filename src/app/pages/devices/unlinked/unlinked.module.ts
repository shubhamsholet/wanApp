import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnlinkedPageRoutingModule } from './unlinked-routing.module';

import { UnlinkedPage } from './unlinked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnlinkedPageRoutingModule
  ],
  declarations: [UnlinkedPage]
})
export class UnlinkedPageModule {}
