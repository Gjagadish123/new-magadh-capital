import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferenceComponent } from './difference.component';

describe('DifferenceComponent', () => {
  let component: DifferenceComponent;
  let fixture: ComponentFixture<DifferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DifferenceComponent]
    });
    fixture = TestBed.createComponent(DifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
