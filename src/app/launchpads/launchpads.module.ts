import {NgModule} from '@angular/core';
import {LaunchpadsComponent} from './launchpads.component';
import {LaunchpadComponent} from './launchpad/launchpad.component';
import {LaunchpadDetailsComponent} from './launchpad/launchpad-details.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LaunchpadsComponent,
    LaunchpadComponent,
    LaunchpadDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  bootstrap: [LaunchpadsComponent]
})
export class LaunchpadsModule {}
