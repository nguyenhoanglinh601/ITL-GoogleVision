import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeDetailComponent } from './surcharge-detail.component';

describe('SurchargeDetailComponent', () => {
  let component: SurchargeDetailComponent;
  let fixture: ComponentFixture<SurchargeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurchargeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurchargeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
