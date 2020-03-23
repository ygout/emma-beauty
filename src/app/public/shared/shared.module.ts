import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicRoutingModule } from '../public-routing.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    SharedModule,
    PublicRoutingModule,
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedPublicModule { }
