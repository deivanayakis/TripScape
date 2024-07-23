import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  private baseURL = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  addPackageDetails(packageData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/addPackageDetails`, packageData);
  }

  getAllPackageDetails(): Observable<any> {
    return this.http.get(`${this.baseURL}/package`);
  }

  updatePackageDetails(_id: string, packageData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/updatePackageDetails/${_id}`, packageData);
  }

  deletePackage(pname: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/deletePackage/${pname}`);
  }

}
