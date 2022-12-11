import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as tech from '../../../assets/destination/data.json';

@Component({
  selector: 'app-technology-page',
  templateUrl: './technology-page.component.html',
  styleUrls: ['./technology-page.component.css'],
})
export class TechnologyPageComponent implements OnInit {
  constructor(private servie: AppService) {}
  techData = tech;
  screenWidth = 0;
  compBgImage = '';

  selectedIndex = 0;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.compBgImage =
        '../../assets/technology/background-technology-tablet.jpg';
      this.servie.bgPath.next(this.compBgImage);
    } else if (this.screenWidth < 768 && this.screenWidth < 500) {
      this.compBgImage =
        '../../assets/technology/background-technology-mobile.jpg';
      this.servie.bgPath.next(this.compBgImage);
    } else {
      if (this.screenWidth > 768)
        this.compBgImage =
          '../../assets/technology/background-technology-desktop.jpg';
      this.servie.bgPath.next(this.compBgImage);
    }
  }

  selectTech(index: number) {
    this.selectedIndex = index;
  }
}
