import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventModRoutingModule } from './event-mod-routing.module';
import { EventsComponent } from './events/events.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { DeleteEventComponent } from './events/delete-event/delete-event.component';
import { DetailEventComponent } from './events/detail-event/detail-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';


@NgModule({
  declarations: [EventsComponent, AddEventComponent, DeleteEventComponent, DetailEventComponent, EditEventComponent],
  imports: [
    CommonModule,
    EventModRoutingModule
  ]
})
export class EventModModule { }
