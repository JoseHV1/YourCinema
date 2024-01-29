import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalSearchModule } from '../modal-search/modal-search.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, FormsModule, RouterModule, ModalSearchModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
