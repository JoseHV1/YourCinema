import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardMovieComponent } from './card-movie.component';
import { NoImageModule } from '../../pipes/no-image/no-image.module';

@NgModule({
    declarations: [CardMovieComponent],
    imports: [CommonModule, NoImageModule],
    exports: [CardMovieComponent],
})
export class CardMovieModule {}
