import {NgModule} from '@angular/core';
import {LaunchesComponent} from './launches.component';
import {BrowserModule} from '@angular/platform-browser';
import {LaunchComponent} from './launch/launch.component';

@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [LaunchesComponent]
})
export class LaunchesModule {}
