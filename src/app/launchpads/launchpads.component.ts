import { Component, OnInit } from '@angular/core';
import {LaunchpadsService} from './launchpads.service';
import {Launchpad} from './launchpads.model';


@Component({
  selector: 'app-launchpads',
  templateUrl: './launchpads.component.html',
  styleUrls: ['./launchpads.component.css']
})
export class LaunchpadsComponent implements OnInit {
  launchPads: Launchpad[];
  launchpadPopupContent: Launchpad;

  constructor(private launchpadsService: LaunchpadsService) { }

  ngOnInit() {
    this.launchpadsService.getAll().subscribe(
      ((data) => this.launchPads = data)
    );
  }

  openPopup(launchpad: Launchpad) {
    this.launchpadPopupContent = launchpad;
  }

  closePopup() {
    this.launchpadPopupContent = null;
  }
}
