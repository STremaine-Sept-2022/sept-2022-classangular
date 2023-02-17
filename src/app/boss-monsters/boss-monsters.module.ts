import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BossListComponent } from './boss-list/boss-list.component';
import { DeadliestBossComponent } from './deadliest-boss/deadliest-boss.component';
import { BossDetailsComponent } from './boss-details/boss-details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BossListComponent,
    DeadliestBossComponent,
    BossDetailsComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ],
  exports: [
    BossListComponent
  ]

})
export class BossMonstersModule { }
