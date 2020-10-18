import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './routing/app-routing.module';

// Angular Fire Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

// Prime NG CSS Library Modules
import { PrimeModule} from 'src/app/prime-ng/prime.module';
import { SharedModule } from 'primeng/api';

// Eagerly Loaded Components
import { AppComponent } from './app.component';
import { NavComponent } from './components/core/nav/nav.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/core/home/home.component';

// Auth Modules
import { AuthService } from './services/auth.service';
import { AuthGuard } from './components/auth/auth-guard';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    PrimeModule,
    SharedModule

  ],
  exports: [AppRoutingModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
