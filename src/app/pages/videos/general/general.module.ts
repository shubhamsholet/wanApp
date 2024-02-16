import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeneralPageRoutingModule } from './general-routing.module';

import { GeneralPage } from './general.page';
import { ComponentsModule } from "../../../componentsmodule";

@NgModule({
  declarations: [GeneralPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneralPageRoutingModule,
    ComponentsModule
  ]
})
export class GeneralPageModule { }
