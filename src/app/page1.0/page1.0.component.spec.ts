import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page10Component } from './page1.0.component';

describe('Page10Component', () => {
  let component: Page10Component;
  let fixture: ComponentFixture<Page10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page10Component]
    });
    fixture = TestBed.createComponent(Page10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
