import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchesComponent } from './pages/launches/launches.component';
import { RocketsComponent } from './pages/rockets/rockets.component';
import { LaunchComponent } from './pages/launch/launch.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'launches',
        component: LaunchesComponent,
      },
      {
        path: 'rockets',
        component: RocketsComponent,
      },
      {
        path: 'launches/:id',
        component: LaunchComponent,
      },
      {
        path: 'rockets/:id',
        component: RocketsComponent,
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpaceXRoutingModule {}
