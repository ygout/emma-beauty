import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { SharedPublicModule } from '../public/shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    SharedPublicModule
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    SharedPublicModule
  ]
})
export class SharedModule { }
