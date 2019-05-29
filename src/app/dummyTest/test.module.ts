import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';

import { SelectModule } from 'ng2-select';
import { MaterialModule } from '../app.module';

import { TestRoutes } from './test.routing';
import { UserComponent } from './user/user.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TestRoutes),
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule
  ],
  declarations: [
    UserComponent,
    CreateUserComponent
  ]
})

export class TestModule {}
