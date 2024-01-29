import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { RouterModule } from '@angular/router';
import { NoImageModule } from '../../pipes/no-image/no-image.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, RouterModule, NoImageModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
