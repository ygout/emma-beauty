import { LOCALE_ID, NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectLayoutComponent } from "./layouts/project-layout/project-layout.component";

import { HttpErrorInterceptor } from "./interceptors/http-error.interceptor";

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from '@/shared/shared.module';

registerLocaleData(localeFr);
@NgModule({
  declarations: [NavbarComponent, FooterComponent, ProjectLayoutComponent],
  imports: [CommonModule, HttpClientModule, RouterModule, SharedModule],
  exports: [HttpClientModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded.");
    }
  }
}
