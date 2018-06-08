import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {Launchpad} from '../launchpads.model';

@Component({
  selector: 'app-googlemap-dialog',
  templateUrl: './googlemap-dialog.component.html'
})
export class GoogleMapDialogComponent implements OnInit {

  launchpad: Launchpad;

  constructor() { }

  ngOnInit() {
  }
}
