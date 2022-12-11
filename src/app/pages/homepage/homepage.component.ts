import { Component, OnInit, HostListener } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  constructor(private servie: AppService) {}
  compBgImage = '';
  screenWidth = 0;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth < 768) {
      this.compBgImage = 'assets/home/background-home-tablet.jpg';
      this.servie.bgPath.next(this.compBgImage);
    } else if (this.screenWidth < 768 && this.screenWidth < 500) {
      this.compBgImage = 'assets/home/background-home-mobile.jpg';
      this.servie.bgPath.next(this.compBgImage);
    } else {
      if (this.screenWidth > 768)
        this.compBgImage = 'assets/home/background-home-desktop.jpg';
      this.servie.bgPath.next(this.compBgImage);
    }
  }
}
