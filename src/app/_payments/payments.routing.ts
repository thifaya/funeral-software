import { Routes } from '@angular/router';

import { ViewPaymentsComponent } from './ViewPayments/ViewPayments.component';

export const PaymentsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'viewpayments',
      component: ViewPaymentsComponent
    }]
  }

];
