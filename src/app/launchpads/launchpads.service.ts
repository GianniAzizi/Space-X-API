import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Launchpad} from './launchpads.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchpadsService {
  private baseUrl = 'https://api.spacexdata.com/v2/launchpads';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Launchpad[]> {
    return this.http.get<Launchpad[]>(this.baseUrl);
  }

  getLatest(): Observable<Launchpad> {
    return this.http.get<Launchpad>(`${this.baseUrl}/latest`);
  }

  getByLaunchpadId(launchpadId: string): Observable<Launchpad> {
    return this.http.get<Launchpad>(`${this.baseUrl}/${launchpadId}`);
  }
}
