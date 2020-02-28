import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedPublicModule } from '../shared/shared.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
