import {Component, Input, OnInit} from '@angular/core';
import {Launch} from '../launches.model';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})
export class LaunchComponent implements OnInit {
  @Input() launch: Launch;

  constructor() {}

  ngOnInit() {

  }
}
