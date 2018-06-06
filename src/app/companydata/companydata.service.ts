import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Companydata} from './companydata.model';
import {History} from './companydata.model';

@Injectable({
  providedIn: 'root'
})
export class CompanydataService {
  private baseUrl = 'https://api.spacexdata.com/v2/info';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Companydata> {
    return this.http.get<Companydata>(this.baseUrl);
  }

  getHistory(): Observable<History[]> {
    return this.http.get<History[]>(`${this.baseUrl}/history`);
  }
}
