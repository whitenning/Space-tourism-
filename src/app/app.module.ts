import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppService } from './app.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrewPageComponent } from './pages/crew-page/crew-page.component';
import { DestinationPageComponent } from './pages/destination-page/destination-page.component';

import { TechnologyPageComponent } from './pages/technology-page/technology-page.component';

import { HomepageComponent } from './pages/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    CrewPageComponent,
    TechnologyPageComponent,
    DestinationPageComponent,
    NavbarComponent,

    HomepageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
