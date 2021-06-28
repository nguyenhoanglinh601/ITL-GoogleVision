import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeDetailListComfirmdeleteComponent } from './surcharge-detail-list-comfirmdelete.component';

describe('SurchargeDetailListComfirmdeleteComponent', () => {
  let component: SurchargeDetailListComfirmdeleteComponent;
  let fixture: ComponentFixture<SurchargeDetailListComfirmdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurchargeDetailListComfirmdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurchargeDetailListComfirmdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
