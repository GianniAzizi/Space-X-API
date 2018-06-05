import {NgModule} from '@angular/core';
import {LaunchesComponent} from './launches.component';
import {BrowserModule} from '@angular/platform-browser';
import {LaunchComponent} from './launch/launch.component';
import {LaunchDetailsComponent} from './launch/launch-details.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchComponent,
    LaunchDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule
  ],
  bootstrap: [LaunchesComponent]
})
export class LaunchesModule {}
