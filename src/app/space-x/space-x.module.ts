import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceXRoutingModule } from './space-x-routing.module';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchesComponent } from './pages/launches/launches.component';
import { RocketTableComponent } from './components/rocket-table/rocket-table.component';
import { LaunchTableComponent } from './components/launch-table/launch-table.component';
import { LaunchComponent } from './pages/launch/launch.component';
import { RocketComponent } from './pages/rocket/rocket.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';





@NgModule({
  declarations: [
  RocketsComponent,
  LaunchesComponent,
  RocketTableComponent,
  LaunchTableComponent,
  LaunchComponent,
  RocketComponent,

  ],
  imports: [
    CommonModule,
    SpaceXRoutingModule,
    PrimeNgModule,
    HttpClientModule
  ]
})
export class SpaceXModule { }
