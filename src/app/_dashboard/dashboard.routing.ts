import { Routes } from '@angular/router';

import { DashBoardComponent } from './DashBoard.component';

export const DashboardRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: 'dashboard',
        component: DashBoardComponent
    }]
}
];
