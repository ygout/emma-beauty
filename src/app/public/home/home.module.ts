import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HomeComponent, HomeBannerComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
