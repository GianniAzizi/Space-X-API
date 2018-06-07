import {NgModule} from '@angular/core';
import {RocketsComponent} from './rockets.component';
import {BrowserModule} from '@angular/platform-browser';
import {RocketComponent} from './rocket/rocket.component';
import {MaterialModule} from '../material/material.module';
@NgModule({
  declarations: [
    RocketsComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  bootstrap: [RocketsComponent]
})
export class RocketsModule {}
