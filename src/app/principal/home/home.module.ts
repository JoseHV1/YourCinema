import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CarouselModule } from '../../shared/components/carousel/carousel.module';
import { CardMovieModule } from '../../shared/components/card-movie/card-movie.module';
import { PaginationModule } from '../../shared/components/pagination/pagination.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CarouselModule,
    CardMovieModule,
    PaginationModule
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
