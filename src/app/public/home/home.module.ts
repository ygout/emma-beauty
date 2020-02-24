import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedPublicModule } from '../shared/shared.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
