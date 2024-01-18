import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '../interfaces/rocket';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  url: string = 'https://api.spacexdata.com/v4/rockets';

  constructor(private http:HttpClient) { }

  getAllRockets():Observable<Rocket[]>{
    return this.http.get<Rocket[]>(this.url);
  }

  getRocketById(id:string):Observable<Rocket>{
    return this.http.get<Rocket>(`${this.url}/${id}`);
  }
}
