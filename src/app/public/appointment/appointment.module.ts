import { NgModule } from '@angular/core';
import { AppointmentComponent } from './appointment/appointment.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppointmentComponent],
  imports: [
    SharedModule,
  ]
})
export class AppointmentModule { }
