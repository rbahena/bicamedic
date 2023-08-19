import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './main/main.component';
import { routingModule } from './app-routing.module';
import { CarrouselComponent } from './sections/carrousel/carrousel.component';
import { ServicesComponent } from './sections/services/services.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { WelcomeBicamedicComponent } from './sections/welcome-bicamedic/welcome-bicamedic.component';
import { StatisticsComponent } from './sections/statistics/statistics.component';
import { OurClientsComponent } from './sections/our-clients/our-clients.component';
import { ReviewsComponent } from './sections/reviews/reviews.component';
import { OurTeamComponent } from './sections/our-team/our-team.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarrouselComponent,
    ServicesComponent,
    AboutUsComponent,
    WelcomeBicamedicComponent,
    StatisticsComponent,
    OurClientsComponent,
    ReviewsComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
