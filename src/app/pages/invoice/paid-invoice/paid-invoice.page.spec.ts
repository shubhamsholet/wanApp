import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaidInvoicePage } from './paid-invoice.page';

describe('PaidInvoicePage', () => {
  let component: PaidInvoicePage;
  let fixture: ComponentFixture<PaidInvoicePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaidInvoicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
