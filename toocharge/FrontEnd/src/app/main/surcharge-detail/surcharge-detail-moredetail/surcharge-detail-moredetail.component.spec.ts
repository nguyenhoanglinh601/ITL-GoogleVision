import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeDetailMoredetailComponent } from './surcharge-detail-moredetail.component';

describe('SurchargeDetailMoredetailComponent', () => {
  let component: SurchargeDetailMoredetailComponent;
  let fixture: ComponentFixture<SurchargeDetailMoredetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurchargeDetailMoredetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurchargeDetailMoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
