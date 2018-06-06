import {Component} from '@angular/core';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  HTTP_ERROR = 'Unable to reach space-x api';
}
