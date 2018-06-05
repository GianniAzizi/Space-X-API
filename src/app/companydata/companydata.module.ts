import {NgModule} from '@angular/core';
import {CompanydataComponent} from './companydata.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    CompanydataComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [CompanydataComponent]
})
export class CompanydataModule {}
