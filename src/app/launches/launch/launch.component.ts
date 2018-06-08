import {Component, Input, OnInit} from '@angular/core';
import {Launch} from '../launches.model';
import {YoutubeDialogComponent} from '../youtube-dialog/youtube-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-launch',
  templateUrl: './launch.component.html',
  styleUrls: ['./launch.component.css']
})


export class LaunchComponent implements OnInit {
  @Input() launch: Launch;
  youtubeDialogRef: MatDialogRef<YoutubeDialogComponent>;
  launchPopupContent: Launch;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
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

  convertToTimestamp(date) {
    return new Date(date).getTime();
  }

  today: number = Date.now();

}
