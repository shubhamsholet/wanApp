import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingInvoicePage } from './pending-invoice.page';

describe('PendingInvoicePage', () => {
  let component: PendingInvoicePage;
  let fixture: ComponentFixture<PendingInvoicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PendingInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
