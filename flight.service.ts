import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseURL = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  addFlightDetails(flightData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/addFlightDetails`, flightData);
  }

  getAllFlightDetails(): Observable<any> {
    return this.http.get(`${this.baseURL}/flight`);
  }

}