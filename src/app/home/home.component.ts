import { Component, OnInit } from '@angular/core';
import {Launch} from '../launches/launches.model';
import {LaunchesService} from '../launches/launches.service';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nextLaunch: Launch;
  date: string;
  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService
  ) { }

  ngOnInit() {
    this.launchesService.getNextLaunch().subscribe(
      ((data) => {
        this.nextLaunch = data;
        this.date = new DatePipe('en-US').transform(data.launch_date_utc, 'yyyy-MM-dd hh:mm:ss');
      })
    );

  }

}
