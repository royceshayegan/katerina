import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Data } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { TestimonialsComponent } from './page/testimonials/testimonials.component';
import { ProgramsComponent } from './page/programs/programs.component';
import { ContactComponent } from './page/contact/contact.component';
import { PageComponent } from './page/page.component';


const routes: Routes = [
  { path: '', 
    component: PageComponent,
    children: [
      { path: '', 
        component: HomeComponent, 
        data: { 
          title: 'Katerina Satori',
          metaDescription: 'Katerina Satori', 
          pageTitle: 'Home', 
          pageType: 'home' 
        }
      },
      { path: 'about', 
        component: AboutComponent, 
        data: { 
          title: 'Katerina Satori',
          metaDescription: 'Katerina Satori', 
          pageTitle: 'About me', 
          pageType: 'page' 
        }
      },
      { path: 'testimonials', 
        component: TestimonialsComponent, 
        data: { 
          title: 'Katerina Satori',
          metaDescription: 'Katerina Satori', 
          pageTitle: 'Events', 
          pageType: 'page' 
        }
      },
      { path: 'programs', 
        component: ProgramsComponent, 
        data: { 
          title: 'Katerina Satori',
          metaDescription: 'Katerina Satori', 
          pageTitle: 'Work with me', 
          pageType: 'page' 
        }
      },
      { path: 'contact', 
        component: ContactComponent, 
        data: { 
          title: 'Katerina Satori',
          metaDescription: 'Katerina Satori', 
          pageTitle: 'Contact Me', 
          pageType: 'page' 
        }
      }
    ]
  },

  { path: '**', 
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }