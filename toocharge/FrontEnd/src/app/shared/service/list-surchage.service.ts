import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListSurchage } from '../model/model.model';

@Injectable({
  providedIn: 'root'
})
export class ListSurchageService {
  public NumberOfRow = 1;
  public showWebcam: boolean = false;
  listSurchage: ListSurchage[];
  public surcharge:any;
  public htmls: Array<string>=[];
  public idImage: string;
  readonly rootURL = 'http://localhost:51279/api';

  constructor(private http: HttpClient){}
  getAllListSurchage(){
    this.http
    .get(`${this.rootURL}/catCharges/`)
    .toPromise()
    .then((res) => {this.listSurchage = res as ListSurchage[];
    });  }
  showImageDetail(){

  }
}
