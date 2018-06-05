import { Component, OnInit } from '@angular/core';
import {LaunchesService} from './launches.service';
import {Launch} from './launches.model';
import {LaunchpadsService} from '../launchpads/launchpads.service';
import {Launchpad} from '../launchpads/launchpads.model';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  launches: Launch[];
  launchPopupContent: Launch;
  launchpads: Launchpad[];
  filters = {
    startDate: '',
    endDate: '',
    order: 'asc',
    site_id: ''
  };

  constructor(
    private launchesService: LaunchesService,
    private launchpadsService: LaunchpadsService
  ) { }

  ngOnInit() {
    this.loadAll();
    this.launchpadsService.getAll().subscribe(
      ((data) => this.launchpads = data)
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
    this.launchesService.getByFilters(filters).subscribe(
      ((data) => this.launches = data)
    );
  }

  reset() {
    this.loadAll();
    this.filters = {
      startDate: '',
      endDate: '',
      order: 'asc',
      site_id: ''
    };
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
}
