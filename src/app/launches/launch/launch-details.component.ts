import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LaunchesService} from '../launches.service';
import {CapsulesService} from '../../capsules/capsules.service';
import {Launch} from '../launches.model';
import {Capsule} from '../../capsules/capsules.model';
import {CapsuleDetails} from '../../capsules/capsules.model';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-details.component.html',
  styleUrls: ['launch-details.component.css']
})
export class LaunchDetailsComponent implements OnInit {
  launch: Launch;
  capsule: Capsule;
  capsuledetails: CapsuleDetails;

  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService,
    private capsulesService: CapsulesService
  ) {}

  ngOnInit() {
    const flight_number = this.route.snapshot.paramMap.get('id');
    this.launchesService.getByFlightNumber(flight_number).subscribe(
      ((data: Launch) => {
        this.launch = data;
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

