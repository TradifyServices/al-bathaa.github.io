import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BookingComponent } from './booking/booking.component';
import { ClientComponent } from './client/client.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  { path:'',component:HomeComponent},
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'services',component:ServicesComponent},
  { path:'booking',component:BookingComponent},
  { path:'pricing',component:PricingComponent},
  { path:'clients',component:ClientComponent},
  { path:'testimonials',component:TestimonialsComponent},
  { path:'blogs',component:BlogsComponent},
  { path:'contact',component:ContactComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
