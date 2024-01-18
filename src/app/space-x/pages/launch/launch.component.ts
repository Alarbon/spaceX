import { Component, Input } from '@angular/core';
import { Launch } from '../../interfaces/launch';
import { LaunchesService } from '../../services/launches.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrl: './launch.component.css',
})
export class LaunchComponent {
  launch?: Launch;

  constructor(private launchesService: LaunchesService, private activeRoute: ActivatedRoute,
    ) {
    this.activeRoute.params.subscribe(({id}) => {
      this.launchesService.getOneLaunch(id).subscribe((launch) => {
        this.launch = launch;
      });
    });
  }
}
