import { Routes } from '@angular/router';

import { CreateSocietyComponent } from './CreateSociety/CreateSociety.component';
import { CreateSocietyMemberComponent } from './CreateSocietyMember/CreateSocietyMember.component';
import { SocietyInfoComponent } from './SocietyInfo/SocietyInfo.component';
import { ViewAllSocietyComponent } from './ViewAllSociety/ViewAllSociety.component';
import { ViewSocietyMembersComponent } from './ViewSocietyMembers/ViewSocietyMembers.component';
import { EditSocietyComponent } from './EditSociety/EditSociety.component';
import { EditMemberComponent } from '../_members/EditMember/EditMember.component';


export const SocietyRoutes: Routes = [
  

  {
    path: '',
    children: [{
      path: 'createsociety',
      component: CreateSocietyComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'createsocietymember',
      component: CreateSocietyMemberComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'editsociety',
      component: EditSocietyComponent
    }]
  },
  {
    path: '',
    children: [{
        path: 'societyinfomation',
        component: SocietyInfoComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'viewallsocieties',
      component: ViewAllSocietyComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'viewallsocietymembers',
      component: ViewSocietyMembersComponent
    }]
  }

];
