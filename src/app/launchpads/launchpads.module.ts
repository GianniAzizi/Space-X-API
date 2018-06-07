import {NgModule} from '@angular/core';
import {LaunchpadsComponent} from './launchpads.component';
import {LaunchpadComponent} from './launchpad/launchpad.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {GooglemapsComponent} from '../googlemaps/googlemaps.component';
import {AgmCoreModule} from '@agm/core';
import {MaterialModule} from '../material/material.module';

@NgModule({
  declarations: [
    LaunchpadsComponent,
    LaunchpadComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2JTwuEuSMGvZgOdkBQaLkQ7j78l_EGII'
    }),
    MaterialModule
  ],
  bootstrap: [LaunchpadsComponent]
})
export class LaunchpadsModule {}
