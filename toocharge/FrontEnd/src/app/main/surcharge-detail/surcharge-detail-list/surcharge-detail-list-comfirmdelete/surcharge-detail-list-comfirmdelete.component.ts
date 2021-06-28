import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-surcharge-detail-list-comfirmdelete',
  templateUrl: './surcharge-detail-list-comfirmdelete.component.html',
  styleUrls: ['./surcharge-detail-list-comfirmdelete.component.css']
})
export class SurchargeDetailListComfirmdeleteComponent implements OnInit {
  @Input() message;
  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  cancel(){
    this.activeModal.close('cancel')
  }
  ok(){
    this.activeModal.close('ok')
  }
  close(){
    this.activeModal.close('close');
  }
}
