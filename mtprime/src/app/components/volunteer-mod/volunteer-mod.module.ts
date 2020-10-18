import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerModRoutingModule } from './volunteer-mod-routing.module';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { AddVolunteerComponent } from './volunteers/add-volunteer/add-volunteer.component';
import { DeleteVolunteerComponent } from './volunteers/delete-volunteer/delete-volunteer.component';
import { DetailVolunteerComponent } from './volunteers/detail-volunteer/detail-volunteer.component';
import { EditVolunteerComponent } from './volunteers/edit-volunteer/edit-volunteer.component';


@NgModule({
  declarations: [VolunteersComponent, AddVolunteerComponent, DeleteVolunteerComponent, DetailVolunteerComponent, EditVolunteerComponent],
  imports: [
    CommonModule,
    VolunteerModRoutingModule
  ]
})
export class VolunteerModModule { }
