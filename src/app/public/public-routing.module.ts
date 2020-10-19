import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home/home.component";
import { AppointmentComponent } from "./appointment/appointment/appointment.component";
import { PrestationsComponent } from "./prestations/prestations/prestations.component";
import { GalleryComponent } from "./gallery/gallery/gallery.component";

const PUBLIC_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "prestations", component: PrestationsComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "appointment", component: AppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(PUBLIC_ROUTES)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
