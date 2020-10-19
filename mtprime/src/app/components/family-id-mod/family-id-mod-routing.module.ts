import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFamilyIdComponent } from './family-ids/add-family-id/add-family-id.component';
import { DetailFamilyIdComponent } from './family-ids/detail-family-id/detail-family-id.component';
import { EditFamilyIdComponent } from './family-ids/edit-family-id/edit-family-id.component';
import { FamilyIdsComponent } from './family-ids/family-ids.component';

const routes: Routes = [
  { path: '', component: FamilyIdsComponent },
  { path: 'add-family-id', component: AddFamilyIdComponent },
  { path: 'edit-family-id/:id', component: EditFamilyIdComponent },
  { path: 'detail-family-id/:id', component: DetailFamilyIdComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FamilyIdModRoutingModule { }
