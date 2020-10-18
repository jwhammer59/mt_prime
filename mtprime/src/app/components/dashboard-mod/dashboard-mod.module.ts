import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModRoutingModule } from './dashboard-mod-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardModRoutingModule
  ]
})
export class DashboardModModule { }
