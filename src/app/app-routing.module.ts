import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'space-x',
    loadChildren: () =>
      import('./space-x/space-x.module').then((m) => m.SpaceXModule),
  },
  {
    path: '**',
    redirectTo: 'space-x/launches',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
