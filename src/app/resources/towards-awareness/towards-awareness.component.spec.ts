import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowardsAwarenessComponent } from './towards-awareness.component';

describe('TowardsAwarenessComponent', () => {
  let component: TowardsAwarenessComponent;
  let fixture: ComponentFixture<TowardsAwarenessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowardsAwarenessComponent]
    });
    fixture = TestBed.createComponent(TowardsAwarenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
