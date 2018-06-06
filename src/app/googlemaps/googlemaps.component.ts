import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})
export class GooglemapsComponent {
  @Input() lat: any = 51.678418;
  @Input() lng: any = 7.809007;
}
