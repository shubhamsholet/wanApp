import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaidInvoicePageRoutingModule } from './paid-invoice-routing.module';

import { PaidInvoicePage } from './paid-invoice.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaidInvoicePageRoutingModule
  ],
  declarations: [PaidInvoicePage]
})
export class PaidInvoicePageModule {}
