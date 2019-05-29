import { Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';


export const TestRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'viewalluser',
        component: UserComponent
    }]},
    {
        path: '',
        children: [ {
          path: 'createuser',
          component: CreateUserComponent
      }]}
    
];
