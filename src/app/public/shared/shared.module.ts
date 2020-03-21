import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    SharedModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedPublicModule { }
