import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatCardModule,
  MatExpansionModule
} from '@angular/material';

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
import {MaterialModule} from './material/material.module';

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
    MatCardModule,
    MatExpansionModule,
    RouterModule.forRoot(
      ROUTES
    ),
    HttpClientModule,
    LaunchesModule,
    CompanydataModule,
    LaunchpadsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
