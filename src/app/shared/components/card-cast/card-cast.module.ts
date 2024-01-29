import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCastComponent } from './card-cast.component';
import { NoImageModule } from '../../pipes/no-image/no-image.module';

@NgModule({
  declarations: [CardCastComponent],
  imports: [CommonModule, NoImageModule],
  exports: [CardCastComponent],
})
export class CardCastModule {}
