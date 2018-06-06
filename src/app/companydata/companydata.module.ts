import {NgModule} from '@angular/core';
import {CompanydataComponent} from './companydata.component';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../material/material.module';

@NgModule({
  imports: [
    BrowserModule,
    MaterialModule
  ],
  declarations: [
    CompanydataComponent
  ],
  bootstrap: [CompanydataComponent]
})
export class CompanydataModule {}
