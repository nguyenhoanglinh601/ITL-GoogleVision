import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportRequestInforComponent } from './transport-request-infor.component';

describe('TransportRequestInforComponent', () => {
  let component: TransportRequestInforComponent;
  let fixture: ComponentFixture<TransportRequestInforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportRequestInforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportRequestInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
