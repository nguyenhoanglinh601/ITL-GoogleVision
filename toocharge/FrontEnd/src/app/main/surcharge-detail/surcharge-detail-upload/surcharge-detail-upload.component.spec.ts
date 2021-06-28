import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurchargeDetailUploadComponent } from './surcharge-detail-upload.component';

describe('SurchargeDetailUploadComponent', () => {
  let component: SurchargeDetailUploadComponent;
  let fixture: ComponentFixture<SurchargeDetailUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurchargeDetailUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurchargeDetailUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
