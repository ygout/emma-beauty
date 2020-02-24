import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedPublicModule } from '../shared/shared.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedPublicModule
  ]
})
export class HomeModule { }
