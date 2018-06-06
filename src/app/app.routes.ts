import {LaunchesComponent} from './launches/launches.component';
import {Routes} from '@angular/router';
import {LaunchDetailsComponent} from './launches/launch/launch-details.component';
import {CompanydataComponent} from './companydata/companydata.component';
import {LaunchpadsComponent} from './launchpads/launchpads.component';
import {LaunchpadDetailsComponent} from './launchpads/launchpad/launchpad-details.component';
import {ErrorComponent} from './error/error.component';

export const ROUTES: Routes = [
  {path: 'launches', component: LaunchesComponent},
  {path: 'launches/:id', component: LaunchDetailsComponent},
  {path: 'company', component: CompanydataComponent},
  {path: 'launchpads', component: LaunchpadsComponent},
  {path: 'launchpads/:id', component: LaunchpadDetailsComponent},
  {path: 'httpError', component: ErrorComponent}
];
