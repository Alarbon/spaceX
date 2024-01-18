import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../interfaces/launch';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  url: string = 'https://api.spacexdata.com/v4/launches';

  constructor(private http: HttpClient) {}

  getAllLaunchesPast(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.url}/past`);
  }

  getAllLaunchesUpcoming(): Observable<Launch[]> {
    return this.http.get<Launch[]>(`${this.url}/upcoming`);
  }

  getOneLaunch(id: string): Observable<Launch> {
    return this.http.get<Launch>(`${this.url}/${id}`);
  }


}
