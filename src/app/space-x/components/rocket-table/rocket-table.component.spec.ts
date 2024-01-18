import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketTableComponent } from './rocket-table.component';

describe('RocketTableComponent', () => {
  let component: RocketTableComponent;
  let fixture: ComponentFixture<RocketTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RocketTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RocketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
