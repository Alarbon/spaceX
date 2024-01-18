import { Component } from '@angular/core';
import { Rocket } from '../../interfaces/rocket';
import { RocketsService } from '../../services/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrl: './rockets.component.css',
})
export class RocketsComponent {
  rockets: Rocket[] = [];

  constructor(private rocketsService:RocketsService){
    this.rocketsService.getAllRockets().subscribe((rockets) => {
      this.rockets = rockets;
    });
  }
}
