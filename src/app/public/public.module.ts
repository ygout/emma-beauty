import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { PrestationsModule } from './prestations/prestations.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule,
    ContactModule,
    PrestationsModule,
    PortfolioModule
  ]
})
export class PublicModule { }
