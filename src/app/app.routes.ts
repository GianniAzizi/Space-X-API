import {LaunchesComponent} from './launches/launches.component';
import {Routes} from '@angular/router';
import {LaunchDetailsComponent} from './launches/launch/launch-details.component';
import {CompanydataComponent} from './companydata/companydata.component';

export const ROUTES: Routes = [
  {path: 'launches', component: LaunchesComponent},
  {path: 'launches/:id', component: LaunchDetailsComponent},
  {path: 'company', component: CompanydataComponent}
];
