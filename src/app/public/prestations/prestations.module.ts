import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './prestations/prestations.component';
import { PrestationCardComponent } from './prestation-card/prestation-card.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PrestationsComponent, PrestationCardComponent],
  imports: [
    SharedModule
  ]
})
export class PrestationsModule { }
