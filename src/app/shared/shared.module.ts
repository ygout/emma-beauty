
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopDirective } from './directives/scroll-to-top.directive';

@NgModule({
  declarations: [ScrollToTopDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    ScrollToTopDirective,
  ]
})
export class SharedModule { }
