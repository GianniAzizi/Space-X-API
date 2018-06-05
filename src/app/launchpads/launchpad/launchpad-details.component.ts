import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LaunchpadsService} from '../launchpads.service';
import {Launchpad} from '../launchpads.model';

@Component({
  selector: 'app-launchpad-detail',
  templateUrl: './launchpad-details.component.html',
  styleUrls: ['launchpad-details.component.css']
})
export class LaunchpadDetailsComponent implements OnInit {
  launchpad: Launchpad;

  constructor(
    private route: ActivatedRoute,
    private launchpadsService: LaunchpadsService
  ) {}

  ngOnInit() {
    const launchpad_id = this.route.snapshot.paramMap.get('id');
    this.launchpadsService.getByLaunchpadId(launchpad_id).subscribe(
      ((data: Launchpad) => this.launchpad = data)
    );
  }
}
