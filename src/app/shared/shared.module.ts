
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToTopDirective } from './directives/scroll-to-top.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';

@NgModule({
  declarations: [ScrollToTopDirective],
  imports: [],
  exports: [
    CommonModule,
    ScrollToTopDirective,
    FormsModule,
    ReactiveFormsModule,
    MasonryGalleryModule
  ]
})
export class SharedModule { }
