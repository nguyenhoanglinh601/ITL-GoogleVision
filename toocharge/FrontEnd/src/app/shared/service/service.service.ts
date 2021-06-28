import { Injectable } from '@angular/core';
import { ListSurchage, TransportRequestInfor } from '../model/model.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root',
})
export class TransportRequestInforService {
  formData: TransportRequestInfor = new TransportRequestInfor();
  readonly rootURL = 'http://localhost:51279/api';
  transportRequestInfor:TransportRequestInfor = new TransportRequestInfor(); 
  isDisabled: boolean;

  constructor(private http: HttpClient, public router: Router, public datepipe: DatePipe) { }
  getInforTransportRequestID(id) {
   return  this.http.get(`${this.rootURL}/TransportRequestInfors/${id}`);
  }
  getAllInforTransportRequest(){
    return this.http.get(`${this.rootURL}/TransportRequestInfors/`);
  }
  convertRefno(ref: string){
    
    return [ref.slice(0, 8),ref.slice(9, 13), ref.slice(14)].join('');
  }
  // resetForm(form?: NgForm)
  // {
  //   if(form!=null)
  //   {
  //     form.resetForm();
  //     this.formData = {
  //       refNo:'', placeFrom: '', placeTo:'',driverName:'',excutionDate:null,licensePlate:'',
  //     };
  //   }
  // }
  checkInforTransportRequest(){
    if(this.formData.refNo != null)
    {
    this.getInforTransportRequestID(this.convertRefno(this.formData.refNo)).subscribe((res)=>{
        if((res as TransportRequestInfor).refNo === this.formData.refNo)
        { 
          // let exDate = this.datepipe.transform((res as TransportRequestInfor).excutionDate, 'dd-MM-yyyy');
          // console.log(exDate);
          (res as TransportRequestInfor).excutionDate = this.datepipe.transform((res as TransportRequestInfor).excutionDate, 'dd/MM/yyyy');
          this.formData = Object.assign({}, res as TransportRequestInfor);
           this.isDisabled =  true;
           this.router.navigateByUrl('/surcharge');
        }  
        // else
        // {
        //   this.resetForm();
        // }
    });
  }
  }
}
