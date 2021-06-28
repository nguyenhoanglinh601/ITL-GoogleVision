import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeDetailListComponent } from './surcharge-detail-list.component';

describe('SurchargeDetailListComponent', () => {
  let component: SurchargeDetailListComponent;
  let fixture: ComponentFixture<SurchargeDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurchargeDetailListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurchargeDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
