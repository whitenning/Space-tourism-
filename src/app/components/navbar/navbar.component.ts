import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  home = true;
  dest = false;
  crew = false;
  tech = false;
  hamButton = false;

  /* Hambtn */
  hamBtn() {
    if (this.hamButton === false) {
      this.hamButton = true;
    } else {
      this.hamButton = false;
    }
  }
  /* Navbar navigations */
  navIsActiveHome() {
    if (this.home === false) {
      this.home = true;
      this.dest = false;
      this.crew = false;
      this.tech = false;
    } else {
      this.home = true;
    }
  }

  navIsActiveDest() {
    if (this.dest === false) {
      this.dest = true;
      this.crew = false;
      this.tech = false;
      this.home = false;
    } else {
      this.dest = true;
    }
  }

  navIsActiveCrew() {
    if (this.crew === false) {
      this.crew = true;
      this.dest = false;
      this.tech = false;
      this.home = false;
    } else {
      this.crew = true;
    }
  }

  navIsActiveTech() {
    if (this.tech === false) {
      this.dest = false;
      this.crew = false;
      this.tech = true;
      this.home = false;
    } else {
      this.tech = true;
    }
  }
}
