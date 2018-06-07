import {NgModule} from '@angular/core';
import {RocketComponent} from './rocket.component';
import {MaterialModule} from '../../material/material.module';
import {BrowserModule} from '@angular/platform-browser';
@NgModule({
  declarations: [
    RocketComponent
  ],
  exports: [
    RocketComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule
  ]
})
export class RocketModule {}
