import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalModule } from '../../global/global.module';

import { TableModRoutingModule } from './table-mod-routing.module';
import { EventTableComponent } from './event-table/event-table.component';
import { VolunteerTableComponent } from './volunteer-table/volunteer-table.component';
import { FamilyIdTableComponent } from './family-id-table/family-id-table.component';

@NgModule({
  declarations: [
    EventTableComponent,
    VolunteerTableComponent,
    FamilyIdTableComponent,
  ],
  imports: [CommonModule, TableModRoutingModule, GlobalModule],
  exports: [
    EventTableComponent,
    VolunteerTableComponent,
    FamilyIdTableComponent,
  ],
})
export class TableModModule {}
