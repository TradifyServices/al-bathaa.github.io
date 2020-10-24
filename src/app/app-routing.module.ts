import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BookingComponent } from './booking/booking.component';
import { CareerComponent } from './career/career.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { CorporateTransportComponent } from './corporate-transport/corporate-transport.component';
import { HomeComponent } from './home/home.component';
import { HotelTransportComponent } from './hotel-transport/hotel-transport.component';
import { IndustrialTransportComponent } from './industrial-transport/industrial-transport.component';
import { LeaseTransportComponent } from './lease-transport/lease-transport.component';
import { OnRentTransportComponent } from './on-rent-transport/on-rent-transport.component';
import { PartnersComponent } from './partners/partners.component';
import { PricingComponent } from './pricing/pricing.component';
import { SchoolTransportComponent } from './school-transport/school-transport.component';
import { ServicesComponent } from './services/services.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'services',component:ServicesComponent},
  { path:'booking',component:BookingComponent},
  { path:'pricing',component:PricingComponent},
  { path:'clients',component:ClientComponent},
  { path:'suppliers',component:SuppliersComponent},
  { path:'partners',component:PartnersComponent},
  { path:'testimonials',component:TestimonialsComponent},
  { path:'blogs',component:BlogsComponent},
  { path:'contact',component:ContactComponent},
  { path:'school_transport',component:SchoolTransportComponent},
  { path:'industrial_transport',component:IndustrialTransportComponent},
  { path:'hotel_transport',component:HotelTransportComponent},
  { path:'corporate_transport',component:CorporateTransportComponent},
  { path:'on_rent_transport',component:OnRentTransportComponent},
  { path:'lease_transport',component:LeaseTransportComponent},
  { path:'career',component:CareerComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
