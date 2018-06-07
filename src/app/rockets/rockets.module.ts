import {NgModule} from '@angular/core';
import {RocketsComponent} from './rockets.component';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../material/material.module';
import {RocketModule} from './rocket/rocket.module';
@NgModule({
  declarations: [
    RocketsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RocketModule
  ],
  bootstrap: [RocketsComponent]
})
export class RocketsModule {}
