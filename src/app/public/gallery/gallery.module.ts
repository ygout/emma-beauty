import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GalleryTagFilterComponent } from './gallery-tag-filter/gallery-tag-filter.component';



@NgModule({
  declarations: [GalleryComponent, GalleryTagFilterComponent],
  imports: [
    SharedModule
  ]
})
export class GalleryModule {
}
