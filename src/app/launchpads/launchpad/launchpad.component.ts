import {Component, Input, OnInit} from '@angular/core';
import {Launchpad} from '../launchpads.model';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  @Input() launchpad: Launchpad;

  constructor() {}

  ngOnInit() {

  }
}
