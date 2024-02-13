import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnlinkedPage } from './unlinked.page';

describe('UnlinkedPage', () => {
  let component: UnlinkedPage;
  let fixture: ComponentFixture<UnlinkedPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UnlinkedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
