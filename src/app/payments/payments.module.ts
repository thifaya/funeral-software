import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PaymentsRoutes } from './payments-routing.module';
import { VeiwPaymentsComponent } from './veiw-payments/veiw-payments.component';
import { SelectModule } from 'ng2-select';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';

import { MaterialModule } from 'src/app/app.module';


@NgModule({
  declarations: [VeiwPaymentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PaymentsRoutes),
    FormsModule,
    MaterialModule,
    SelectModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule

  ]
})
export class PaymentsModule { }
