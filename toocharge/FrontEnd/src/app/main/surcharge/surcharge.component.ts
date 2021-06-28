import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as $ from 'jquery';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';
import { TransportRequestInforService } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnInit {

  constructor(public router: Router, public listSurchageService: ListSurchageService, public tranService: TransportRequestInforService) { }
  

  ngOnInit(): void {

    this.listSurchageService.getAllListSurchage();
  }
  back(){
    this.tranService.isDisabled = false;
  }
  chooseSurcharge(){
    let text = $('#surcharge :selected')
    this.listSurchageService.surcharge = text.text();
    const navigateToSurchargeDetail: NavigationExtras={};
    this.router.navigate(['/surcharge-detail'], navigateToSurchargeDetail);
    this.listSurchageService.showWebcam = true;
  }
}
