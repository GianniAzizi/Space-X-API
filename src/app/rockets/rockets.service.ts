import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Rocket} from './rockets.model';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  private baseUrl = 'https://api.spacexdata.com/v2/rockets';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Rocket[]> {
    return this.http.get<Rocket[]>(this.baseUrl);
  }

  getByRocketId(rocketId: string): Observable<Rocket> {
    return this.http.get<Rocket>(`${this.baseUrl}/${rocketId}`);
  }
}
