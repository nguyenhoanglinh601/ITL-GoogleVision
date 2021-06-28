import { Component, OnInit } from '@angular/core';
import { TransportRequestInforService } from 'src/app/shared/service/service.service';
import * as $ from 'jquery';
import {Router} from '@angular/router'
@Component({
  selector: 'app-transport-request',
  templateUrl: './transport-request.component.html',
  styleUrls: ['./transport-request.component.css']
})
export class TransportRequestComponent implements OnInit {

  constructor(public tranService: TransportRequestInforService, public router: Router) { }

  ngOnInit(): void {    
  }
  next(){
    this.tranService.checkInforTransportRequest();
  }
  checkFormData(formData){
    
    if(Object.keys(formData).length === 0 || this.tranService.formData.placeFrom==""|| this.tranService.formData.placeTo==""|| this.tranService.formData.excutionDate==null|| this.tranService.formData.driverName==""|| this.tranService.formData.licensePlate=="")
    return false;
    return true;
  

  }
}
