import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SurchargeComponent } from './main/surcharge/surcharge.component';
import { TransportRequestComponent } from './main/transport-request/transport-request.component';
import { SurchargeDetailComponent } from './main/surcharge-detail/surcharge-detail.component';
import { SurchargeDetailMoredetailComponent } from './main/surcharge-detail/surcharge-detail-moredetail/surcharge-detail-moredetail.component';
import { SurchargeDetailListComfirmdeleteComponent } from './main/surcharge-detail/surcharge-detail-list/surcharge-detail-list-comfirmdelete/surcharge-detail-list-comfirmdelete.component';


const routes: Routes = [
  {path: 'surcharge', component: SurchargeComponent},
  {path: 'surcharge-detail', component: SurchargeDetailComponent},
  {path: 'surcharge-detail-moredetail', component: SurchargeDetailMoredetailComponent},
  {path:'', component:TransportRequestComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
