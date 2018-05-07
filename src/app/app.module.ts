import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { FooterComponent } from './layout/footer/footer.component';
import { TopnavComponent } from './layout/topnav/topnav.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { TestimonialsComponent } from './page/testimonials/testimonials.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProgramsComponent } from './page/programs/programs.component';

// Owl Carousel
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopnavComponent,
    PageComponent,
    HomeComponent,
    AboutComponent,
    TestimonialsComponent,
    ContactComponent,
    ProgramsComponent
  ],
  imports: [
    BrowserModule,
    OwlModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
