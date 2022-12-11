import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CrewPageComponent } from './pages/crew-page/crew-page.component';
import { DestinationPageComponent } from './pages/destination-page/destination-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { TechnologyPageComponent } from './pages/technology-page/technology-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'destination', component: DestinationPageComponent },
  { path: 'technology', component: TechnologyPageComponent },
  { path: 'crew', component: CrewPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
