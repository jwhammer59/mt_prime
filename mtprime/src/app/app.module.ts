import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule} from 'src/app/prime-ng/prime.module';

import { NavComponent } from './components/nav/nav.component';

import { SharedModule } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
