import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {MatIconModule, MatNavList, MatSidenavModule, MatToolbar, MatToolbarModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { LaunchesComponent } from './launches/launches.component';
import {HttpClientModule} from "@angular/common/http";

const appRoutes: Routes = [
  {path: 'launches', component: LaunchesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatNavList,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
