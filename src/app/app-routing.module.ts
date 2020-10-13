import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BookingComponent } from './booking/booking.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { PricingComponent } from './pricing/pricing.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  {path:'',component:CarouselComponent  },
  {path:'about', component:AboutComponent},
  {path:'pricing',component:PricingComponent},
  {path:'home',component:CarouselComponent},
  {path:'blog',component:BlogsComponent},
  {path:'services',component:ServicesComponent},
  {path:'booking',component:BookingComponent},
  {path:'pricing',component:PricingComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'mobileapp',component:MobileAppComponent},
  {path:'footer',component:FooterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
