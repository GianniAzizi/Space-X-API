import { Component, OnInit } from '@angular/core';
import {Launch} from '../launches/launches.model';
import {LaunchesService} from '../launches/launches.service';
import {ActivatedRoute} from '@angular/router';
import {DatePipe} from '@angular/common';
import {interval, Observable} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nextLaunch: Launch;
  date: string;
  eventDate: Date;
  diff: number;
  countDownResult: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor(
    private route: ActivatedRoute,
    private launchesService: LaunchesService
  ) {
    interval(1000).pipe(
      map((x) => this.diff = Math.floor((this.eventDate.getTime() - new Date().getTime()) / 1000))
    ).subscribe((x) => {
      this.days = this.getDays(this.diff);
      this.hours = this.getHours(this.diff);
      this.minutes = this.getMinutes(this.diff);
      this.seconds = this.getSeconds(this.diff);
    });
  }

  ngOnInit() {
    this.launchesService.getNextLaunch().subscribe(
      ((data) => {
        this.nextLaunch = data;
        this.date = new DatePipe('en-US').transform(data.launch_date_utc, 'yyyy-MM-dd hh:mm:ss');
        this.eventDate = new Date(data.launch_date_utc);
      })
    );

  }

  getDays(t){
    let days;
    days = Math.floor(t / 86400);

    return days;
  }

  getHours(t){
    let days, hours;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;

    return hours;
  }

  getMinutes(t){
    let days, hours, minutes;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;

    return minutes;
  }

  getSeconds(t){
    let days, hours, minutes, seconds;
    days = Math.floor(t / 86400);
    t -= days * 86400;
    hours = Math.floor(t / 3600) % 24;
    t -= hours * 3600;
    minutes = Math.floor(t / 60) % 60;
    t -= minutes * 60;
    seconds = t % 60;

    return seconds;
  }

}
