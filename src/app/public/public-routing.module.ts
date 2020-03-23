import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { PrestationsComponent } from './prestations/prestations/prestations.component';


const PUBLIC_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prestations', component: PrestationsComponent }

];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
