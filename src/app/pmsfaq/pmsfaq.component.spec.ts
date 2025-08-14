import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsfaqComponent } from './pmsfaq.component';

describe('PmsfaqComponent', () => {
  let component: PmsfaqComponent;
  let fixture: ComponentFixture<PmsfaqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmsfaqComponent]
    });
    fixture = TestBed.createComponent(PmsfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
