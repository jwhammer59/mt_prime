import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyIdModRoutingModule } from './family-id-mod-routing.module';
import { FamilyIdsComponent } from './family-ids/family-ids.component';
import { AddFamilyIdComponent } from './family-ids/add-family-id/add-family-id.component';
import { DeleteFamilyIdComponent } from './family-ids/delete-family-id/delete-family-id.component';
import { DetailFamilyIdComponent } from './family-ids/detail-family-id/detail-family-id.component';
import { EditFamilyIdComponent } from './family-ids/edit-family-id/edit-family-id.component';


@NgModule({
  declarations: [FamilyIdsComponent, AddFamilyIdComponent, DeleteFamilyIdComponent, DetailFamilyIdComponent, EditFamilyIdComponent],
  imports: [
    CommonModule,
    FamilyIdModRoutingModule
  ]
})
export class FamilyIdModModule { }
