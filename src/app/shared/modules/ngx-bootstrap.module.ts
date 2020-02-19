import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot()
  ],
  exports: [
    AlertModule,
    ModalModule,
    PopoverModule
  ]
})
export class NgxBootstrapModule { }
