import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SectionFeaturesComponent } from './components/section-features/section-features.component';
import { IconComponent } from './components/icon/icon.component';
import { SectionMealsComponent } from './components/section-meals/section-meals.component';
import { SectionStepsComponent } from './components/section-steps/section-steps.component';
import { SectionCitiesComponent } from './components/section-cities/section-cities.component';
import { SectionTestimonialsComponent } from './components/section-testimonials/section-testimonials.component';
import { SectionPlansComponent } from './components/section-plans/section-plans.component';
import { SectionFormComponent } from './components/section-form/section-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionFeaturesComponent,
    IconComponent,
    SectionMealsComponent,
    SectionStepsComponent,
    SectionCitiesComponent,
    SectionTestimonialsComponent,
    SectionPlansComponent,
    SectionFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
