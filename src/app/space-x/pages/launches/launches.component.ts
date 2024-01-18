import { Component } from '@angular/core';
import { Launch } from '../../interfaces/launch';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.css',
})
export class LaunchesComponent {
  launchesPast: Launch[] = [];
  launchesUpComing: Launch[] = [];

  constructor(private launchesService: LaunchesService) {
    this.launchesService.getAllLaunchesPast().subscribe((launches) => {
      this.launchesPast = launches;
         
    });

    this.launchesService.getAllLaunchesUpcoming().subscribe((launches) => {
      this.launchesUpComing = launches;
    });
  }

  get getLaunchesPast(){
    return this.launchesPast;
  }

  get getLaunchesUpComing(){
    return this.launchesUpComing;
  }
}
