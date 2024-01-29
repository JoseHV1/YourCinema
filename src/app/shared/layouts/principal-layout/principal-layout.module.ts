import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalLayoutComponent } from './principal-layout.component';
import { NavbarModule } from '../../components/navbar/navbar.module';
import { FooterModule } from '../../components/footer/footer.module';

@NgModule({
  declarations: [PrincipalLayoutComponent],
  imports: [CommonModule, NavbarModule, FooterModule],
  exports: [PrincipalLayoutComponent],
})
export class PrincipalLayoutModule {}
