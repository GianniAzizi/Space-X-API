import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Launch} from './launches.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private baseUrl = 'https://api.spacexdata.com/v2/launches';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Launch[]> {
    return this.http.get<Launch[]>(this.baseUrl + '/all');
  }

  getLatest(): Observable<Launch> {
    return this.http.get<Launch>(this.baseUrl + '/latest');
  }
}
