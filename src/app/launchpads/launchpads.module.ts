import {NgModule} from '@angular/core';
import {LaunchpadsComponent} from './launchpads.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {LaunchpadModule} from './launchpad/launchpad.module';

@NgModule({
  declarations: [
    LaunchpadsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MaterialModule,
    LaunchpadModule
  ],
  bootstrap: [LaunchpadsComponent]
})
export class LaunchpadsModule {}
