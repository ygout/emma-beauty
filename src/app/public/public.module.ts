import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { AppointmentModule } from './appointment/appointment.module';
import { PrestationsModule } from './prestations/prestations.module';
import { SharedModule } from '../shared/shared.module';
import { SharedPublicModule } from './shared/shared.module';
import { GalleryModule } from './gallery/gallery.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    AppointmentModule,
    PrestationsModule,
    SharedPublicModule,
    GalleryModule,
  ]
})
export class PublicModule { }
