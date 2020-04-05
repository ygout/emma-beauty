import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [GalleryComponent],
  imports: [
    SharedModule
  ]
})
export class GalleryModule {
}
