import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToInvestWithUsComponent } from './how-to-invest-with-us.component';

describe('HowToInvestWithUsComponent', () => {
  let component: HowToInvestWithUsComponent;
  let fixture: ComponentFixture<HowToInvestWithUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToInvestWithUsComponent]
    });
    fixture = TestBed.createComponent(HowToInvestWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
