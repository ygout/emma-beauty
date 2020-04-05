import { NgModule } from '@angular/core';
import { PrestationsComponent } from './prestations/prestations.component';
import { PrestationCardComponent } from './prestation-card/prestation-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrestationCategoryComponent } from './prestation-category/prestation-category.component';



@NgModule({
  declarations: [PrestationsComponent, PrestationCardComponent, PrestationCategoryComponent],
  imports: [
    SharedModule
  ]
})
export class PrestationsModule { }
