import {NgModule} from '@angular/core';
import {LaunchesComponent} from './launches.component';
import {BrowserModule} from '@angular/platform-browser';
import {LaunchComponent} from './launch/launch.component';
import {LaunchDetailsComponent} from './launch/launch-details.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import { MaterialModule } from '../material/material.module';
import { YoutubeDialogComponent, SafePipe } from './youtube-dialog/youtube-dialog.component';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchComponent,
    LaunchDetailsComponent,
    YoutubeDialogComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  bootstrap: [LaunchesComponent],
  entryComponents: [YoutubeDialogComponent]
})
export class LaunchesModule {}
