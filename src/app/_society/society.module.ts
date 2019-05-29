import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';

import { SelectModule } from 'ng2-select';
import { MaterialModule } from 'src/app/app.module';

import { SocietyRoutes } from './society.routing';
import { CreateSocietyComponent } from './CreateSociety/CreateSociety.component';
import { CreateSocietyMemberComponent } from './CreateSocietyMember/CreateSocietyMember.component';
import { SocietyInfoComponent } from './SocietyInfo/SocietyInfo.component';
import { ViewAllSocietyComponent } from './ViewAllSociety/ViewAllSociety.component';
import { ViewSocietyMembersComponent } from './ViewSocietyMembers/ViewSocietyMembers.component';
import { EditSocietyComponent } from './EditSociety/EditSociety.component';
import { EditMemberComponent } from '../_members/EditMember/EditMember.component';
import { MembersModule } from '../_members/members.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SocietyRoutes),
    FormsModule,
    MaterialModule,
    SelectModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule
  ],
  declarations: [
    ViewAllSocietyComponent,
    SocietyInfoComponent,
    EditSocietyComponent,
    CreateSocietyMemberComponent,
    ViewSocietyMembersComponent,
    CreateSocietyComponent,
    ViewSocietyMembersComponent
  ]
})

export class SocietyModule {}
