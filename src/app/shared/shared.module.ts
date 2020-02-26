import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPublicModule } from '../public/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedPublicModule
  ],
  exports: [
    CommonModule,
    SharedPublicModule
  ]
})
export class SharedModule { }
