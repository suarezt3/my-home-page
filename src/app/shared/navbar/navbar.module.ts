import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { PrimeNGModule } from 'src/app/prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNGModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
