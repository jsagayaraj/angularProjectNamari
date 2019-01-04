import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { GalaryComponent } from './galary/galary.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';

import { ConfigService} from './config.service';



const appRoutes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: 'Home', component: HeaderComponent },
  { path: 'About', component: AboutComponent },
  { path: 'Services', component: ServiceComponent },
  { path: 'Gallery', component: GalaryComponent },
  { path: 'Clients', component: ClientComponent },
  { path: 'Pricing', component: PricingComponent },
  { path: 'Testimonials', component: TestimonialComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    SocialMediaComponent,
    TestimonialComponent,
    GalaryComponent,
    ServiceComponent,
    ClientComponent,
    PricingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
