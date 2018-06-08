import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Launch} from './launches.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private baseUrl = 'https://api.spacexdata.com/v2/launches';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.baseUrl}/all`);
  }

  getLatestLaunch(): Observable<Launch> {
    return this.http.get<Launch>(`${this.baseUrl}/latest`);
  }

  getUpcoming(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.baseUrl}/upcoming`);
  }

  getNextLaunch(): Observable<Launch> {
    return this.http.get<Launch>(`${this.baseUrl}/next`);
  }

  getByFlightNumber(flightNumber: string): Observable<Launch> {
    const options = {
      params: new HttpParams().set('flight_number', flightNumber)
    };
    return this.http.get<Launch>(this.baseUrl, options);
  }

  getByFilters(filters: Map<string, string>): Observable<Launch[]> {
    const options = {
      params: new HttpParams()
    };
    filters.forEach((value, key) => {
      options.params = options.params.append(key, value);
    });
    return this.http.get<Launch[]>(this.baseUrl, options);
  }
}
