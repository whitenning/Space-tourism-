import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/app.service';
import * as crew from '../../../assets/destination/data.json';

@Component({
  selector: 'app-crew-page',
  templateUrl: './crew-page.component.html',
  styleUrls: ['./crew-page.component.css'],
})
export class CrewPageComponent implements OnInit {
  constructor(private servie: AppService) {}
  @Input() indicators = true;
  compBgImage = 'assets/crew/background-crew-desktop.jpg';
  crewData = crew;
  selectedIndex = 0;
  selectedCrew(index: number) {
    this.selectedIndex = index;
  }

  ngOnInit() {
    this.servie.bgPath.next(this.compBgImage);
  }
}
