import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingInvoicePage } from './pending-invoice.page';

const routes: Routes = [
  {
    path: '',
    component: PendingInvoicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingInvoicePageRoutingModule {}
