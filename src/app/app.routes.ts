import {LaunchesComponent} from './launches/launches.component';
import {Routes} from '@angular/router';
import {LaunchDetailsComponent} from './launches/launch/launch-details.component';
import {CompanydataComponent} from './companydata/companydata.component';
import {LaunchpadsComponent} from './launchpads/launchpads.component';
import {ErrorComponent} from './error/error.component';
import {RocketsComponent} from './rockets/rockets.component';

export const ROUTES: Routes = [
  {path: 'launches', component: LaunchesComponent},
  {path: 'launches/:id', component: LaunchDetailsComponent},
  {path: 'company', component: CompanydataComponent},
  {path: 'launchpads', component: LaunchpadsComponent},
  {path: 'httpError', component: ErrorComponent},
  {path: 'rockets', component: RocketsComponent}
];
