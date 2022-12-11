import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(private service: AppService) {}
  subBg: Subscription;
  title = 'space-tourism-frontend-mentor.io';
  style = {
    'background-image': '',
    height: '100vh',
    width: '100vw',
  };
  // compBgIsmage = '../../assets/home/background-home-desktop.jpg';
  // this.service.bgPath.next(this.compBgIsmage);

  ngOnInit() {
    this.subBg = this.service.bgPath.subscribe((bgPath) => {
      this.style['background-image'] = 'url(' + bgPath + ')';
    });
  }

  ngOnDestroy() {
    if (this.subBg) {
      this.subBg.unsubscribe();
    }
  }
}
