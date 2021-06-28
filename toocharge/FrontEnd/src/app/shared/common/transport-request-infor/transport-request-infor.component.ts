import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { cssNumber } from 'jquery';
import { TransportRequestComponent } from 'src/app/main/transport-request/transport-request.component';
import { TransportRequestInfor } from '../../model/model.model';
import { TransportRequestInforService } from '../../service/service.service';


@Component({
  selector: 'app-transport-request-infor',
  templateUrl: './transport-request-infor.component.html',
  styleUrls: ['./transport-request-infor.component.css']
})
export class TransportRequestInforComponent implements OnInit {
  isDisabled: boolean;
  constructor( public tranService: TransportRequestInforService, public datepipe: DatePipe, public router: Router) { }

  ngOnInit(): void {

      this.isDisabled = false;
      }
  convertRefno(ref: string){
    
    return [ref.slice(0, 8),ref.slice(9, 13), ref.slice(14)].join('');
  }
   onEnter(){
     this.tranService.checkInforTransportRequest()
   }
  checkFormData(formData){
    if(Object.keys(formData).length === 0 || this.tranService.formData.placeFrom==""|| this.tranService.formData.placeTo==""|| this.tranService.formData.excutionDate==null|| this.tranService.formData.driverName==""|| this.tranService.formData.licensePlate=="")
    return false;
    return true;
  }
}
