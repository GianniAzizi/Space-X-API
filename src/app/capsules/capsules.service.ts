import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Capsule} from './capsules.model';
import {CapsuleDetails} from './capsules.model';

@Injectable({
  providedIn: 'root'
})
export class CapsulesService {
  private baseUrl = 'https://api.spacexdata.com/v2/parts/caps';
  private baseUrlCapsule = 'https://api.spacexdata.com/v2/capsules';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Capsule[]> {
    return this.http.get<Capsule[]>(this.baseUrl);
  }

  getByCapsuleSerial(capsuleSerial: string): Observable<Capsule> {
    return this.http.get<Capsule>(`${this.baseUrl}/${capsuleSerial}`);
  }

  getByCapsuleId(capsuleId: string): Observable<CapsuleDetails> {
    return this.http.get<CapsuleDetails>(`${this.baseUrlCapsule}/${capsuleId}`);
  }
}
