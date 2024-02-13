import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpiredPage } from './expired.page';

describe('ExpiredPage', () => {
  let component: ExpiredPage;
  let fixture: ComponentFixture<ExpiredPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ExpiredPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
