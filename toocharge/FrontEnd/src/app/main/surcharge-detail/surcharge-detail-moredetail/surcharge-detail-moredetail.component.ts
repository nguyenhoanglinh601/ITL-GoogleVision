import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation, AfterViewInit, HostListener } from '@angular/core';
import { Surcharge } from 'src/app/shared/model/model.model';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';
import { SurchargeDetailService } from 'src/app/shared/service/surcharge-detail.service';
import { NgForm} from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-surcharge-detail-moredetail',
  templateUrl: './surcharge-detail-moredetail.component.html',
  styleUrls: ['./surcharge-detail-moredetail.component.css'],
})
export class SurchargeDetailMoredetailComponent implements OnInit, AfterViewChecked, AfterViewInit {
  public srcimg = "";
  public currentSurcharge;
  public currentID;
  public surchargeDetail: Surcharge;
  @ViewChild('ticket') ticketnumbeFocus: ElementRef;
  @ViewChild('taxcode') taxcodeFocus: ElementRef;
  @ViewChild('price') priceFocus: ElementRef;
  @ViewChild('cur') curFocus: ElementRef;
  @ViewChild('includeVAT') includeVATFocus: ElementRef;
  @ViewChild('VATrate') VATrateFocus: ElementRef;
  constructor(private elementRef: ElementRef, public listSurchageService: ListSurchageService, public surchargeDetailService: SurchargeDetailService, public activeModal: NgbActiveModal) { }
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  ngOnInit(): void {
    this.getIdImage();
  
  }
  
  ngAfterViewInit(): void{
    this.ticketnumbeFocus.nativeElement.focus();
  }
  ngAfterViewChecked():void{
    $('.ngxImageZoomContainer').width($('.ngxImageZoomContainer img').width());
    $('.ngxImageZoomContainer').attr('style', 'width: '+$('.ngxImageZoomContainer img').width()+ 'px !important');
  }
  @HostListener('window:keydown', ['$event'])
  onKeyPress($event: KeyboardEvent) {
    if(($event.ctrlKey || $event.metaKey) && $event.key == "ArrowRight")
      this.nextImage();
    if(($event.ctrlKey || $event.metaKey) && $event.key == "ArrowLeft")
      this.prevImage();
}
  async getIdImage(){
    this.currentID = this.listSurchageService.idImage;
    this.surchargeDetail = this.surchargeDetailService.surCharge[this.listSurchageService.idImage];
    this.currentSurcharge = await this.surchargeDetail;
    this.srcimg = await URL.createObjectURL(this.surchargeDetail.image);
    await $('.content .nameimg').html(this.currentSurcharge.image.name)
    await $('.imgdetail img').attr("src",this.srcimg);
    
    //await this.getInforSurcharge(surchargeInfor);

    // for( let surchargeInfor of this.surchargeDetailService.surCharge)
    // {
    //   if(surchargeInfor.id === parseInt(this.listSurchageService.idImage.substring(3)))
    //   {
    //     this.currentSurcharge = await surchargeInfor;
    //     this.srcimg = await URL.createObjectURL(surchargeInfor.image);
    //     await $('.content .nameimg').html(this.currentSurcharge.image.name)
    //     await $('.imgdetail img').attr("src",this.srcimg);
    //     await this.getInforSurcharge(surchargeInfor);
        
    //     console.log(surchargeInfor.id);
    //     break;
    //   }
    // }
    
  }
  getInforSurcharge(sur){
    $('.col-infor4 input').val(sur.name);
    $('.col-infor5 input').val(sur.inforSurcharge.ticketNumber);
    $('.col-infor6 input').val(sur.inforSurcharge.taxCode);
    $('.col-infor7 input').val(sur.inforSurcharge.price);
    $('.col-infor8 input').val(sur.currency);
    $('.col-infor9 input').val(sur.includeVAT);
    $('.col-infor10 input').val(sur.VATrate);
  }
  async prevImage(){
    
    if(this.currentID>0)
    {
      this.currentID = await this.currentID-1;
      this.srcimg = await URL.createObjectURL(this.surchargeDetailService.surCharge[this.currentID].image);
      await $('.content .nameimg').html(this.surchargeDetailService.surCharge[this.currentID].image.name)
      await $('.imgdetail img').attr("src",this.srcimg); 
    }
  //   let prev = await this.surchargeDetailService.surCharge[this.surchargeDetailService.surCharge.indexOf(this.currentSurcharge)-1];
  //   if(prev!=undefined){
  //   this.srcimg = await URL.createObjectURL(prev.image);
  //   await $('.content .nameimg').html(prev.image.name)
  //   await $('.imgdetail img').attr("src",this.srcimg); 
  //   this.currentSurcharge = prev;
  //   this.getInforSurcharge(prev);
  //  }
  }
  async nextImage(){
    
    if(this.currentID<this.surchargeDetailService.surCharge.length-1)
    {
      this.currentID = await this.currentID+1;
      this.srcimg = await URL.createObjectURL(this.surchargeDetailService.surCharge[this.currentID].image);
      await $('.content .nameimg').html(this.surchargeDetailService.surCharge[this.currentID].image.name)
      await $('.imgdetail img').attr("src",this.srcimg); 
    }
  //   let next = await this.surchargeDetailService.surCharge[this.surchargeDetailService.surCharge.indexOf(this.currentSurcharge)+1];
  //   if(next != undefined){
  //   this.srcimg = await URL.createObjectURL(next.image);
  //   await $('.content .nameimg').html(next.image.name)
  //   await $('.imgdetail img').attr("src",this.srcimg); 
  //   this.currentSurcharge = next;
  //   this.getInforSurcharge(next);
  // }
}

close(){
  this.activeModal.close('save')
}
}
