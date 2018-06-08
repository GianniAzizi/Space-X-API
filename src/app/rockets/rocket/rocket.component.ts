import {Component, Input} from '@angular/core';
import {Rocket} from '../rockets.model';
@Component({
  selector: 'app-rocket',
  templateUrl: 'rocket.component.html',
  styleUrls: ['rocket.component.css']
})
export class RocketComponent {
  @Input() rocket: Rocket;
}
