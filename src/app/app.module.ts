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
import {HttpClientModule} from '@angular/common/http';
import {LaunchesModule} from './launches/launches.module';

const appRoutes: Routes = [
  {path: 'launches', component: LaunchesComponent}
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
    LaunchesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
