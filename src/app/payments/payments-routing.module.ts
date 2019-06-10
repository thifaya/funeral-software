import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VeiwPaymentsComponent} from './veiw-payments/veiw-payments.component';

export const PaymentsRoutes: Routes = [
  {
    path: '',
    children: [{
      path: 'viewpayments',
      component: VeiwPaymentsComponent
    }]
  }
];
