import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';

import { SelectModule } from 'ng2-select';
import { MaterialModule } from 'src/app/app.module';

import { PaymentsRoutes } from './payments.routing';
import { ViewPaymentsComponent } from './ViewPayments/ViewPayments.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PaymentsRoutes),
    FormsModule,
    MaterialModule,
    SelectModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule
  ],
  declarations: [
    ViewPaymentsComponent
  ]
})

export class PaymentsModule {}
