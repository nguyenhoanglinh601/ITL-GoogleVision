import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InforSurcharge, Surcharge } from '../model/model.model';

@Injectable({
    providedIn: 'root'
  })
  export class SurchargeDetailService{
    public show:boolean = false;
      public surchargeInfor: InforSurcharge;
      public listSurchargeInfor: Array<InforSurcharge> = [];
      public surCharge: Array<Surcharge> = [];
      public myfile: File[];
      public filesFromCapture: Array<File> = [];
      //public formdata: any = new FormData();
      httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'Auto','MSCRM.SuppressDuplicateDetection': 'true' })
};
    readonly rootURL = 'https://localhost:44363/api/contents/';
    constructor(private http:HttpClient){}
     getInforSurcharge (file) {

        let formdata = new FormData();
        formdata.append('File', file);
        return this.http.post(`${this.rootURL}GetAllFromImage`, formdata);
        // fetch('https://localhost:44363/api/contents/CategoryTicketFromFileImage', {
        //   method: 'POST',
        //   body: formdata
        // }) .then(response => response.json())
        // .then((res)=>{
          
        //   console.log(res);
        // });
       
    }
  }