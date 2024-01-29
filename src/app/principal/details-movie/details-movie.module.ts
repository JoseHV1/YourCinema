import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsMovieComponent } from './details-movie.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from './components/header/header.module';
import { CardMovieModule } from '../../shared/components/card-movie/card-movie.module';
import { BadgeModule } from './components/badge/badge.module';
import { CardCastModule } from 'src/app/shared/components/card-cast/card-cast.module';

const routes: Routes = [
  {
    path: '',
    component: DetailsMovieComponent,
  },
];

@NgModule({
  declarations: [DetailsMovieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule,
    CardMovieModule,
    CardCastModule,
    BadgeModule,
  ],
  exports: [DetailsMovieComponent],
})
export class DetailsMovieModule {}
