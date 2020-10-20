import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Shared Modules
import { PrimeModule } from '../prime-ng/prime.module';

// Shared Components
import { HeaderComponent } from '../components/core/header/header.component';

import { PhonePipe } from '../pipes/phone.pipe';

@NgModule({
  declarations: [HeaderComponent, PhonePipe],
  imports: [CommonModule, PrimeModule],
  exports: [HeaderComponent, PrimeModule, PhonePipe],
})
export class GlobalModule {}
