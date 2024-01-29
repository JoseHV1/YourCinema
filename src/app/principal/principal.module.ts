import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalLayoutModule } from '../shared/layouts/principal-layout/principal-layout.module';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((module) => module.HomeModule),
      },
      {
        path: 'details/movie/:id',
        loadChildren: () =>
          import('./details-movie/details-movie.module').then(
            (module) => module.DetailsMovieModule
          ),
      },
      {
        path: 'details/cast/:id',
        loadChildren: () =>
          import('./details-cast/details-cast.module').then(
            (module) => module.DetailsCastModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule, RouterModule.forChild(routes), PrincipalLayoutModule],
})
export class PrincipalModule {}
