import { Component, Input, OnInit, OnChanges, ElementRef, AfterViewInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { ListSurchageService } from 'src/app/shared/service/list-surchage.service';
import { SurchargeDetailService } from 'src/app/shared/service/surcharge-detail.service';
import * as $ from 'jquery';
import { ViewEncapsulation } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import * as angular from 'angular'
import { event } from 'jquery';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SurchargeDetailMoredetailComponent } from '../surcharge-detail-moredetail/surcharge-detail-moredetail.component';
import { SurchargeDetailListComfirmdeleteComponent } from './surcharge-detail-list-comfirmdelete/surcharge-detail-list-comfirmdelete.component';
import { ToastrService } from 'ngx-toastr';

import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Workbook } from 'exceljs';
import { templateJitUrl } from '@angular/compiler';
import { format } from 'path';
import { stringify } from 'querystring';
import { forEach } from 'angular';
import { DomSanitizer } from '@angular/platform-browser';
import { Surcharge } from 'src/app/shared/model/model.model';


@Component({
  selector: 'app-surcharge-detail-list',
  templateUrl: './surcharge-detail-list.component.html',
  styleUrls: ['./surcharge-detail-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SurchargeDetailListComponent implements OnInit, OnChanges {
  // @Input() rowData:string;
  // @Input() idTag:number;

  constructor(public router: Router,
    public listSurchageService: ListSurchageService,
    public surchargeDetailService: SurchargeDetailService,
    private elementRef: ElementRef,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private _DomSanitizationService: DomSanitizer,
  ) { }
  public checkall: boolean = false;
  public condition: boolean = true;
  public currentSurcharge: Surcharge;
  fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  fileExtension = '.xlsx';

  ngOnChanges(): void {
  }

  ngOnInit(): void {
    $(document).on('keypress', 'table tbody tr .col5 input', (event) => { return this.onlyNumberKey(event); });
    $(document).on('keypress', 'table tbody tr .col6 input', (event) => { return this.onlyNumberKey(event); });
    $(document).on('keypress', 'table tbody tr .col7 input', (event) => { return this.onlyNumberKey(event); });
    $(document).on('keypress', 'table tbody tr .col10 input', (event) => { return this.onlyNumberKey(event); });
  }
  showDetailImage(event) {
    this.listSurchageService.idImage = event;
    const modal = this.modalService.open(SurchargeDetailMoredetailComponent);
    modal.result.then(() => {
      console.log("hihi");
    }, (reson) => {

    });
  }
  delete(i) {
    const modalRef = this.modalService.open(SurchargeDetailListComfirmdeleteComponent, { backdrop: 'static', });
    let message = "Do you want delete?"
    modalRef.componentInstance.message = message;
    modalRef.result.then((result) => {
      if (result == 'ok') {
        this.surchargeDetailService.surCharge.splice(i, 1);
      }
    }, (reson) => {

    });

  }

  replaceTagDelAndEdit(i) {
    let idTag = i;
    $('table tbody #' + idTag + ' td input').removeAttr('disabled');
    $('table tbody #' + idTag + ' td input').attr('style', 'text-decoration: underline');
    this.currentSurcharge = this.surchargeDetailService.surCharge[i];
  }
  unsave(i) {
    const modalRef = this.modalService.open(SurchargeDetailListComfirmdeleteComponent);
    let message = "Your data unsaved. Do you want to close without save?"
    modalRef.componentInstance.message = message;
    modalRef.result.then((result) => {
      if (result == 'ok') {
        let idTag = i;
        this.surchargeDetailService.surCharge[i] = this.currentSurcharge;
        $('table tbody #' + idTag + ' td input').prop('disabled', 'disabled');
        $('table tbody #' + idTag + ' .check input').removeAttr('disabled');
        $('table tbody #' + idTag + ' td input').attr('style', 'text-decoration: none');
      }
    }, (reson) => {

    });
  }
  save(i) {
    let idTag = i;
    $('table tbody #' + idTag + ' td input').prop('disabled', 'disabled');
    $('table tbody #' + idTag + ' .check input').removeAttr('disabled');
    $('table tbody #' + idTag + ' td input').attr('style', 'text-decoration: none');
    this.toastr.success('Data updates success');
  }
  getSurchargeById(id) {
    return this.surchargeDetailService.surCharge.find(e => { return id == e.id; });
  }
  getNumberOfRow() {
    this.listSurchageService.NumberOfRow = $('.tbody tr').length + 1;
  }
  resetNumberical() {
    let numberRow = $('.tbody tr').length;
    let rows = this.elementRef.nativeElement.querySelectorAll('table tbody tr');
    if (rows) {
      for (let [i, row] of rows.entries()) {
        row.children[1].innerHTML = `${i + 1}`;
      }
    }
  }
  async getDataErrorFromTableToArray(typeData) {
    let listError: Array<Array<any>> = [];
    let rows = this.elementRef.nativeElement.querySelectorAll('table tbody tr');
    debugger
    if (rows) {
      for (let [i, row] of rows.entries()) {
        if (row.children[0].children[0].value == typeData) {
          let sur = await this.getSurchargeById(row.id);
          let error: any = [];
          let workbook = new Workbook();
          let base;
          await this.toBase64(sur.image).then(data => {
            base = data as string;
          });
          let image = await workbook.addImage({
            base64: base,
            extension: 'png'
          });
          error = await [base, sur.name, sur.inforSurcharge.ticketNumber, sur.inforSurcharge.taxCode, sur.inforSurcharge.price, sur.currency, sur.includeVAT, sur.VATrate];
          await listError.push(error);
        }
      }
    }
    return listError;
  }
  async exportErrorList() {

    let workbook = await new Workbook();
    let worksheet = await workbook.addWorksheet('listerror');
    let array = await this.getDataErrorFromTableToArray("ban");
    worksheet.addRow(["image", "name", "ticketNumber", "taxCode", "price", "currency", "includeVAT", "VATrate"]);
    worksheet.getColumn('B').key = 'name';
    worksheet.getColumn('C').key = 'ticketNumber';
    worksheet.getColumn('D').key = 'taxCode';
    worksheet.getColumn('E').key = 'price';
    worksheet.getColumn('F').key = 'currency';
    worksheet.getColumn('G').key = 'includeVAT';
    worksheet.getColumn('H').key = 'VATrate';
    for (let [i, row] of array.entries()) {
      let image = await workbook.addImage({
        base64: row[0],
        extension: 'png'
      });
      await worksheet.addImage(image, {
        tl: { col: 0, row: i + 1 },
        ext: { width: 60, height: 20 }
      });
      await worksheet.addRow({
        name: row[1],
        ticketNumber: row[2],
        taxCode: row[3],
        price: row[4],
        currency: row[5],
        includeVAT: row[6],
        VATrate: row[7],
      });
    }
    await workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver.saveAs(blob, 'listError.xlsx');
    });

    //this.exportExcel( this.getDataErrorFromTableToArray(),'listerror');
  }
  public exportExcel(jsonData: any[], fileName: string): void {

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(jsonData);
    const wb: XLSX.WorkBook = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

    this.saveExcelFile(excelBuffer, fileName);
  }
  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: this.fileType });
    FileSaver.saveAs(data, fileName + this.fileExtension);
  }

  importData() {
    let rows = this.elementRef.nativeElement.querySelectorAll('table tbody tr');
    if (rows) {
      for (let [i, row] of rows.entries()) {
        row.children[3].children[0].value = (this.surchargeDetailService.surCharge[i].name);
        row.children[4].children[0].value = (this.surchargeDetailService.surCharge[i].inforSurcharge.ticketNumber);
        row.children[5].children[0].value = (this.surchargeDetailService.surCharge[i].inforSurcharge.taxCode);
        row.children[6].children[0].value = (this.surchargeDetailService.surCharge[i].inforSurcharge.price);
        row.children[7].children[0].value = (this.surchargeDetailService.surCharge[i].currency);
        row.children[8].children[0].value = (this.surchargeDetailService.surCharge[i].includeVAT);
        row.children[9].children[0].value = (this.surchargeDetailService.surCharge[i].VATrate);
      }
    }
  }
  async exportSuccesData() {
    let workbook = await new Workbook();
    let worksheet = await workbook.addWorksheet('successlist');
    let array = await this.getDataErrorFromTableToArray("checkbox");
    worksheet.addRow(["image", "name", "ticketNumber", "taxCode", "price", "currency", "includeVAT", "VATrate"]);
    worksheet.getColumn('B').key = 'name';
    worksheet.getColumn('C').key = 'ticketNumber';
    worksheet.getColumn('D').key = 'taxCode';
    worksheet.getColumn('E').key = 'price';
    worksheet.getColumn('F').key = 'currency';
    worksheet.getColumn('G').key = 'includeVAT';
    worksheet.getColumn('H').key = 'VATrate';
    for (let [i, row] of array.entries()) {
      let image = await workbook.addImage({
        base64: row[0],
        extension: 'png'
      });
      await worksheet.addImage(image, {
        tl: { col: 0, row: i + 1 },
        ext: { width: 60, height: 20 }
      });
      await worksheet.addRow({
        name: row[1],
        ticketNumber: row[2],
        taxCode: row[3],
        price: row[4],
        currency: row[5],
        includeVAT: row[6],
        VATrate: row[7],
      });
    }
    await workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      FileSaver.saveAs(blob, 'successlist.xlsx');
    });
  }
  getSuccessData() {
    let listSuccessData: Array<any> = [];
    let rows = this.elementRef.nativeElement.querySelectorAll('table tbody tr');
    if (rows) {
      for (let [i, row] of rows.entries()) {
        debugger
        if (row.children[0].children[0].checked) {
          let data: any = {};
          // error.numberical =  row.children[1].data;
          // error.image =  row.children[2].children[0].value;
          data.name = row.children[3].children[0].value;
          data.ticketNumber = row.children[4].children[0].value;
          data.taxCode = row.children[5].children[0].value;
          data.price = row.children[6].children[0].value;
          data.currency = row.children[7].children[0].value;
          data.includeVAT = row.children[8].children[0].value;
          data.VATrate = row.children[9].children[0].value;
          listSuccessData.push(data);
        }
      }
    }
    return listSuccessData;
  }
  toBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }

  onlyNumberKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
    return true;
  }

  checkAll() {
    let check = this.elementRef.nativeElement.querySelectorAll('table tbody tr')
    check.forEach(element => {
      element.children[0].children[0].checked = !this.checkall;
    });
    this.checkall = !this.checkall;
  }
}
