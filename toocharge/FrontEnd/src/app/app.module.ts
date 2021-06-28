import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { TransportRequestComponent } from './main/transport-request/transport-request.component';
import { MainComponent } from './main/main.component';
import { TransportRequestInforComponent } from './shared/common/transport-request-infor/transport-request-infor.component';
import { SurchargeComponent } from './main/surcharge/surcharge.component';
import { SurchargeDetailComponent } from './main/surcharge-detail/surcharge-detail.component';
import { SurchargeDetailUploadComponent } from './main/surcharge-detail/surcharge-detail-upload/surcharge-detail-upload.component';
import { SurchargeDetailListComponent } from './main/surcharge-detail/surcharge-detail-list/surcharge-detail-list.component';
import { SurchargeDetailMoredetailComponent } from './main/surcharge-detail/surcharge-detail-moredetail/surcharge-detail-moredetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';
import {  TransportRequestInforService } from './shared/service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { ListSurchageService } from './shared/service/list-surchage.service';
import { SurchargeDetailService } from './shared/service/surcharge-detail.service';
import { WebcamModule } from 'ngx-webcam';
import { DatePipe } from '@angular/common';
import { SurchargeDetailListComfirmdeleteComponent } from './main/surcharge-detail/surcharge-detail-list/surcharge-detail-list-comfirmdelete/surcharge-detail-list-comfirmdelete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {NgxImageZoomModule} from 'ngx-image-zoom'

@NgModule({
  declarations: [
    AppComponent,
    TransportRequestComponent,
    MainComponent,
    TransportRequestInforComponent,
    SurchargeComponent,
    SurchargeDetailComponent,
    SurchargeDetailUploadComponent,
    SurchargeDetailListComponent,
    SurchargeDetailMoredetailComponent,
    SurchargeDetailListComfirmdeleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
     WebcamModule,
     CommonModule,
     NgbModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot(),
     NgxImageZoomModule
     
  ],
  exports:[CommonModule],
  providers: [TransportRequestInforService, ListSurchageService, DatePipe, SurchargeDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
