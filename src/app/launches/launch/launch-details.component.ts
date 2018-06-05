import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LaunchesService} from '../launches.service';
import {Launch} from '../launches.model';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-details.component.html',
  styleUrls: ['launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  launch: Launch;

  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService
  ) {}

  ngOnInit() {
    const flight_number = this.route.snapshot.paramMap.get('id');
    this.launchesService.getByFlightNumber(flight_number).subscribe(
      ((data: Launch) => this.launch = data)
    );
  }

}
