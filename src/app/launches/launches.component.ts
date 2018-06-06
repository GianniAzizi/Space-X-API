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
  launchPopupContent: Launch;
  launchpads: Launchpad[];
  rockets: Rocket[];
  filters = LaunchesComponent.FILTERS;
  youtubeDialogRef: MatDialogRef<YoutubeDialogComponent>;

  constructor(
    private launchesService: LaunchesService,
    private launchpadsService: LaunchpadsService,
    private rocketsService: RocketsService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadAll();
    this.launchpadsService.getAll().subscribe(
      ((data) => this.launchpads = data)
    );
    this.rocketsService.getAll().subscribe(
      ((data) => this.rockets = data)
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

  openPopup(launch: Launch) {
    this.launchPopupContent = launch;
  }

  closePopup() {
    this.launchPopupContent = null;
  }

  openYoutubeDialog(launch: Launch) {
    this.youtubeDialogRef = this.dialog.open(YoutubeDialogComponent, {
      panelClass: 'cinemaPanel'
        });
    this.youtubeDialogRef.componentInstance.launch = launch;
  }
}
