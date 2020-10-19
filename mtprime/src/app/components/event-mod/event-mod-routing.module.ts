import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './events/add-event/add-event.component';
import { DetailEventComponent } from './events/detail-event/detail-event.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: '', component: EventsComponent },
  { path: 'add-event', component: AddEventComponent },
  { path: 'edit-event/:id', component: EditEventComponent },
  { path: 'detail-event/:id', component: DetailEventComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventModRoutingModule { }
