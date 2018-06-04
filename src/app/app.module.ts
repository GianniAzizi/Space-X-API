import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {MatIconModule, MatNavList, MatSidenavModule, MatToolbar} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import { MissionComponent } from './mission/mission.component';
import { LaunchesComponent } from './launches/launches.component';

const appRoutes: Routes = [
  {path: 'missions', component: MissionComponent},
  {path: 'launches', component: LaunchesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MatToolbar,
    MatNavList,
    MissionComponent,
    LaunchesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
