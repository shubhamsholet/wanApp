import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinkedPage } from './linked.page';

describe('LinkedPage', () => {
  let component: LinkedPage;
  let fixture: ComponentFixture<LinkedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LinkedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
