import {NgModule} from '@angular/core';
import {LaunchpadComponent} from './launchpad.component';
import {AgmCoreModule} from '@agm/core';
import {GooglemapsComponent} from '../../googlemaps/googlemaps.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {GoogleMapDialogComponent} from '../googlemap-dialog/googlemap-dialog.component';
import {MaterialModule} from '../../material/material.module';
@NgModule({
  declarations: [
    LaunchpadComponent,
    GooglemapsComponent,
    GoogleMapDialogComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2JTwuEuSMGvZgOdkBQaLkQ7j78l_EGII'
    }),
    BrowserModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    LaunchpadComponent
  ],
  entryComponents: [GoogleMapDialogComponent]
})
export class LaunchpadModule {}
