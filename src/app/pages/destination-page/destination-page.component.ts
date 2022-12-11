import { Component, OnInit, Input, HostListener } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as destination from '../../../assets/destination/data.json';

interface destinationPlanets {
  name: 'string';
  images: {
    png: 'string';
  };
  description: 'string';
  distance: 'string';
  travel: 'string';
}
@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrls: ['./destination-page.component.css'],
})
export class DestinationPageComponent implements OnInit {
  constructor(private servie: AppService) {}
  @Input() destinations: destinationPlanets[] = [];
  @Input() indicators = true;
  dest = destination;
  selectedIndex = 0;
  selectedPlanet = 0;
  compBgImage = '';
  screenWidth = 0;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.compBgImage = 'assets/technology/background-technology-tablet.jpg';
      this.servie.bgPath.next(this.compBgImage);
    } else if (this.screenWidth < 768 && this.screenWidth < 500) {
      this.compBgImage = 'assets/technology/background-technology-mobile.jpg';
      this.servie.bgPath.next(this.compBgImage);
    } else {
      if (this.screenWidth > 768)
        this.compBgImage =
          'assets/technology/background-technology-desktop.jpg';
      this.servie.bgPath.next(this.compBgImage);
    }
  }

  selectPlanet(index: number): void {
    this.selectedIndex = index;
  }
}
