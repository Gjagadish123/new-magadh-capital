import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentProcessComponent } from './investment-process.component';

describe('InvestmentProcessComponent', () => {
  let component: InvestmentProcessComponent;
  let fixture: ComponentFixture<InvestmentProcessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestmentProcessComponent]
    });
    fixture = TestBed.createComponent(InvestmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
