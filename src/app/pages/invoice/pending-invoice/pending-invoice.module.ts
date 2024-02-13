import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingInvoicePageRoutingModule } from './pending-invoice-routing.module';

import { PendingInvoicePage } from './pending-invoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingInvoicePageRoutingModule
  ],
  declarations: [PendingInvoicePage]
})
export class PendingInvoicePageModule {}
