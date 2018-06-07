import {NgModule} from '@angular/core';
import {LaunchpadComponent} from './launchpad.component';
import {AgmCoreModule} from '@agm/core';
import {GooglemapsComponent} from '../../googlemaps/googlemaps.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
@NgModule({
  declarations: [
    LaunchpadComponent,
    GooglemapsComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC2JTwuEuSMGvZgOdkBQaLkQ7j78l_EGII'
    }),
    BrowserModule,
    RouterModule
  ],
  exports: [
    LaunchpadComponent
  ]
})
export class LaunchpadModule {}
