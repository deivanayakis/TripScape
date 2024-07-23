import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  private baseURL = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  addTrainDetails(trainData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/addTrainDetails`, trainData);
  }

  getAllTrainDetails(): Observable<any> {
    return this.http.get(`${this.baseURL}/train`);
  }

  updateTrainDetails(_id: string, trainData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/updateTrainDetails/${_id}`, trainData);
  }

  deleteTrain(_id: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/deleteTrain/${_id}`);
  }

  getTrainDetails(tid: any):Observable<any> {
    return this.http.get(`${this.baseURL}/getTrainDetails?id=${tid}`);
  }


  
}
