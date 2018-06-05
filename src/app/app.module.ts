import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {
  MatIconModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {LaunchesModule} from './launches/launches.module';
import {ROUTES} from './app.routes';
import {CompanydataModule} from './companydata/companydata.module';
import {LaunchpadsModule} from './launchpads/launchpads.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    RouterModule.forRoot(
      ROUTES
    ),
    HttpClientModule,
    LaunchesModule,
    CompanydataModule,
    LaunchpadsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
