//leaves.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { ApplyComponent } from './apply/apply.component';
import { Page404leavesComponent } from './page404leaves/page404leaves.component';
import { BalanceComponent } from './balance/balance.component';


@NgModule({
  declarations: [
    //LeavesComponent,
    ApplyComponent,
    Page404leavesComponent,
    BalanceComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
  ]
})
export class LeavesModule { }
