import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTimeSlotsComponent } from './available-time-slots-component';

describe('AvailableTimeSlotsComponent', () => {
  let component: AvailableTimeSlotsComponent;
  let fixture: ComponentFixture<AvailableTimeSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableTimeSlotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableTimeSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
