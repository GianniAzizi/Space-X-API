import { Component, OnInit } from '@angular/core';
import {CompanydataService} from './companydata.service';
import {Companydata} from './companydata.model';

@Component({
  selector: 'app-companydata',
  templateUrl: './companydata.component.html',
  styleUrls: ['./companydata.component.css']
})
export class CompanydataComponent implements OnInit {
  companyData: Companydata;

  constructor(private companydataService: CompanydataService) { }

  ngOnInit() {
    this.companydataService.getAll().subscribe(
      ((data) => this.companyData = data)
    );
  }
}
