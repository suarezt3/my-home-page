import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroHeaderModule } from './hero-header/hero-header.module';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurServicesModule } from './our-services/our-services.module';
import { TestimonialsModule } from './testimonials/testimonials.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroHeaderModule,
    OurServicesModule,
    TestimonialsModule
  ]
})
export class ComponentsModule { }
