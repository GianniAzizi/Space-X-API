import { Component, OnInit } from '@angular/core';
import {LaunchesService} from './launches.service';
import {Launch} from './launches.model';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: Launch[];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.launchesService.getAll().subscribe(
      ((data) => this.launches = data),
      ((err) => this.handleHttpError(err))
    );
  }

  private handleHttpError(err) {
    console.log(err);
  }
}
