import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {
  MatIconModule, MatListModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import { CompanydataComponent } from './companydata/companydata.component';
import {HttpClientModule} from '@angular/common/http';
import {LaunchesModule} from './launches/launches.module';
import {CompanydataModule} from './companydata/companydata.module';

const appRoutes: Routes = [
  {path: 'launches', component: LaunchesComponent},
  {path: 'company', component: CompanydataComponent}
];

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
      appRoutes
    ),
    HttpClientModule,
    LaunchesModule,
    CompanydataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
