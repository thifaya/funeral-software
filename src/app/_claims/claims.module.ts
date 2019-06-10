import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { TagInputModule } from 'ngx-chips';

import { SelectModule } from 'ng2-select';
import { MaterialModule } from 'src/app/app.module';

import { ClaimsRoutes } from './claims.routing';
import { ClaimInfoComponent } from './ClaimInfo/ClaimInfo.component';
import { ViewAllClaimsComponent } from './ViewAllClaims/ViewAllClaims.component';
import { CreateClaimComponent } from './CreateClaim/CreateClaim.component';
import { CreateClaimFormComponent } from './CreateClaimForm/CreateClaimForm.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ClaimsRoutes),
    FormsModule,
    MaterialModule,
    SelectModule,
    ReactiveFormsModule,
    NouisliderModule,
    TagInputModule
  ],
  declarations: [
    ClaimInfoComponent,
    ViewAllClaimsComponent,
    CreateClaimComponent,
    CreateClaimFormComponent
  ]
})

export class ClaimsModule {}
