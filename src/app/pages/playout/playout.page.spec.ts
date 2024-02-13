import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayoutPage } from './playout.page';

describe('PlayoutPage', () => {
  let component: PlayoutPage;
  let fixture: ComponentFixture<PlayoutPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
