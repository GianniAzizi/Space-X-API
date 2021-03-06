import { Component, OnInit } from '@angular/core';
import {LaunchesService} from './launches.service';
import {Launch} from './launches.model';
import {LaunchpadsService} from '../launchpads/launchpads.service';
import {Launchpad} from '../launchpads/launchpads.model';
import {Rocket} from '../rockets/rockets.model';
import {RocketsService} from '../rockets/rockets.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { YoutubeDialogComponent } from './youtube-dialog/youtube-dialog.component';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})



export class LaunchesComponent implements OnInit {
  static FILTERS = { startDate: '', endDate: '', order: 'asc', site_id: '', rocket_id: '' };
  launches: Launch[];
  launchpads: Launchpad[];
  upcomingLaunch: Launch[];
  nextLaunch: Launch;
  latestLaunch: Launch;
  rockets: Rocket[];
  filters = LaunchesComponent.FILTERS;


  constructor(
    private launchesService: LaunchesService,
    private launchpadsService: LaunchpadsService,
    private rocketsService: RocketsService
  ) { }

  ngOnInit() {
    this.loadAll();
    this.launchpadsService.getAll().subscribe(
      ((data) => this.launchpads = data)
    );
    this.launchesService.getUpcoming().subscribe(
      ((data) => this.upcomingLaunch = data)
    );
    this.rocketsService.getAll().subscribe(
      ((data) => this.rockets = data)
    );
    this.launchesService.getLatestLaunch().subscribe(
      ((data) => this.latestLaunch = data)
    );
    this.launchesService.getNextLaunch().subscribe(
      ((data) => this.nextLaunch = data)
    );
  }

  loadAll() {
    this.launchesService.getAll().subscribe(
      ((data) => this.launches = data)
    );
  }

  applyFilter() {
    const startDate = this.convertToTimestamp(this.filters.startDate);
    const endDate = this.convertToTimestamp(this.filters.endDate);
    const filters: Map<string, string> = new Map<string, string>();
    filters.set('start', String(startDate));
    filters.set('final', String(endDate));
    filters.set('order', this.filters.order);
    filters.set('site_id', String(this.filters.site_id));
    filters.set('rocket_id', this.filters.rocket_id);
    this.launchesService.getByFilters(filters).subscribe(
      ((data) => this.launches = data)
    );
  }

  reset() {
    this.loadAll();
    this.filters = LaunchesComponent.FILTERS;
  }

  changeOrderFilter(order) {
    this.filters.order = order;
  }

  private convertToTimestamp(date) {
    return (new Date(date).getTime()) / 1000;
  }
}
