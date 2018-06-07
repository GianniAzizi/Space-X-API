import {Component, Input, OnInit} from '@angular/core';
import {Launchpad} from '../launchpads.model';
import {MatDialog, MatDialogRef} from '@angular/material';
import {GoogleMapDialogComponent} from '../googlemap-dialog/googlemap-dialog.component';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  @Input() launchpad: Launchpad;
  googleMapDialog: MatDialogRef<GoogleMapDialogComponent>;
  popup = false;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
  }

  openPopup(launchpad: Launchpad) {
    this.popup = true;
  }

  closePopup() {
    this.popup = false;
  }

  openDialog(launchpad: Launchpad) {
    this.googleMapDialog = this.dialog.open(GoogleMapDialogComponent, {
      panelClass: 'cinemaPanel'
    });
    this.googleMapDialog.componentInstance.launchpad = launchpad;
  }
}
