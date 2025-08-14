import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorFaqComponent } from './investor-faq.component';

describe('InvestorFaqComponent', () => {
  let component: InvestorFaqComponent;
  let fixture: ComponentFixture<InvestorFaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvestorFaqComponent]
    });
    fixture = TestBed.createComponent(InvestorFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
