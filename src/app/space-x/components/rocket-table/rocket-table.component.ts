import { Component, Input } from '@angular/core';
import { Rocket } from '../../interfaces/rocket';

@Component({
  selector: 'app-rocket-table',
  templateUrl: './rocket-table.component.html',
  styleUrl: './rocket-table.component.css',
})
export class RocketTableComponent {
  @Input() rockets: Rocket[] = [];
  selectedRocket?: Rocket
  activate:boolean = false;

  constructor() {
    console.log(this.rockets);
  }

  activateRocket(rocket: Rocket) {
    this.activate = true;
    this.selectedRocket = rocket;
  }
}
