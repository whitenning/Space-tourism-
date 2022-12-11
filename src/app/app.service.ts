import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}
  private bgInit = 'assets/home/background-home-desktop.jpg';

  bgPath: BehaviorSubject<string> = new BehaviorSubject(this.bgInit);
}
