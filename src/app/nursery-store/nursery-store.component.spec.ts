import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseryStoreComponent } from './nursery-store.component';

describe('NurseryStoreComponent', () => {
  let component: NurseryStoreComponent;
  let fixture: ComponentFixture<NurseryStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseryStoreComponent]
    });
    fixture = TestBed.createComponent(NurseryStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
