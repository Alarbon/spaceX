import { Component, Input } from '@angular/core';
import { Launch } from '../../interfaces/launch';

@Component({
  selector: 'app-launch-table',
  templateUrl: './launch-table.component.html',
  styleUrl: './launch-table.component.css'
})
export class LaunchTableComponent {
  @Input () launches: Launch[]= [] ;


 
  

}
