import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoicePage } from './invoice.page';

const routes: Routes = [
  {
    path: '',
    component: InvoicePage,
    children: [
      {
        path: 'pending-invoice',
        loadChildren: () => import('./pending-invoice/pending-invoice.module').then(m => m.PendingInvoicePageModule)
      },
      {
        path: 'paid-invoice',
        loadChildren: () => import('./paid-invoice/paid-invoice.module').then(m => m.PaidInvoicePageModule)
      },
      {
        path: '',
        redirectTo: 'pending-invoice',
        pathMatch: 'full'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicePageRoutingModule { }
