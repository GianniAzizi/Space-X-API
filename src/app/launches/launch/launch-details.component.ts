import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LaunchesService} from '../launches.service';
import {CapsulesService} from '../../capsules/capsules.service';
import {Launch} from '../launches.model';
import {Capsule} from '../../capsules/capsules.model';
import {CapsuleDetails} from '../../capsules/capsules.model';
import {RocketsService} from "../../rockets/rockets.service";
import {Rocket} from "../../rockets/rockets.model";
import {Launchpad} from "../../launchpads/launchpads.model";
import {LaunchpadsService} from "../../launchpads/launchpads.service";

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-details.component.html',
  styleUrls: ['launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  launch: Launch;
  capsule: Capsule;
  launchpad: Launchpad;
  capsuledetails: CapsuleDetails;
  rocket: Rocket;

  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService,
    private capsulesService: CapsulesService,
    private rocketsService: RocketsService,
    private launchpadsService: LaunchpadsService
  ) {}

  ngOnInit() {
    const flight_number = this.route.snapshot.paramMap.get('id');
    this.launchesService.getByFlightNumber(flight_number).subscribe(
      ((data: Launch) => {
        this.launch = data;
        this.rocketsService.getByRocketId(this.launch[0].rocket.rocket_id).subscribe(
          ((rocket) => this.rocket = rocket)
        );
        this.launchpadsService.getByLaunchpadId(this.launch[0].launch_site.site_id).subscribe(
          ((launchpad) => {this.launchpad = launchpad; console.log(this.launchpad);})
        );
        const capsule_serial = data[0].rocket.second_stage.payloads[0].cap_serial;
        this.capsulesService.getByCapsuleSerial(capsule_serial).subscribe(
          ((capsule: Capsule) => {
            this.capsule = capsule;
            const capsule_id = capsule.capsule_id;
            this.capsulesService.getByCapsuleId(capsule_id).subscribe(
              ((capsuledetails: CapsuleDetails) => this.capsuledetails = capsuledetails)
            );
        })
        );
      })
    );
  }
}

