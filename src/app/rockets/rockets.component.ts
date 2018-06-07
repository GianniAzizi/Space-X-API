import {Component, OnInit} from '@angular/core';
import {Rocket} from './rockets.model';
import {RocketsService} from './rockets.service';
@Component({
  selector: 'app-rockets',
  templateUrl: 'rockets.component.html',
  styleUrls: ['rockets.component.css']
})
export class RocketsComponent implements OnInit {
  rockets: Rocket[];

  constructor(private rocketsService: RocketsService) {}

  ngOnInit() {
    this.rocketsService.getAll().subscribe(
      ((data) => this.rockets = data)
    );
  }
}
