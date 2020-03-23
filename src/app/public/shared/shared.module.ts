import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { PublicRoutingModule } from '../public-routing.module';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    SharedModule,
    PublicRoutingModule,
    BrowserModule,
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedPublicModule { }
