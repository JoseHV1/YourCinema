import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsCastComponent } from './details-cast.component';
import { RouterModule, Routes } from '@angular/router';
import { CardCastModule } from 'src/app/shared/components/card-cast/card-cast.module';
import { CardMovieModule } from 'src/app/shared/components/card-movie/card-movie.module';

const routes: Routes = [
  {
    path: '',
    component: DetailsCastComponent,
  },
];

@NgModule({
  declarations: [DetailsCastComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CardCastModule, CardMovieModule],
  exports: [DetailsCastComponent],
})
export class DetailsCastModule {}
