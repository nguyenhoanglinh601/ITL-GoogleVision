import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportRequestComponent } from './transport-request.component';

describe('TransportRequestComponent', () => {
  let component: TransportRequestComponent;
  let fixture: ComponentFixture<TransportRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
