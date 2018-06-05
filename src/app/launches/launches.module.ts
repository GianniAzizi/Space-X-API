import {NgModule} from '@angular/core';
import {LaunchesComponent} from './launches.component';
import {BrowserModule} from '@angular/platform-browser';
import {LaunchComponent} from './launch/launch.component';
import {LaunchDetailsComponent} from './launch/launch-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  bootstrap: [LaunchesComponent]
})
export class LaunchesModule {}
