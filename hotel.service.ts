import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private baseURL = 'http://localhost:3000'; 

  constructor(private http: HttpClient) { }

  getAllHotelDetails(): Observable<any> {
    return this.http.get(`${this.baseURL}/hotel`);
  }

  getAllHotelBDetails(): Observable<any> {
    console.log("hi ")
    return this.http.get(`${this.baseURL}/hotelb`);
  }

  getHotelDetails(hid: any):Observable<any> {
    return this.http.get(`${this.baseURL}/getHotelDetails?id=${hid}`);
  }

  updateHotelDetails(_id: string, hotelData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/updateHotelDetails/${_id}`, hotelData);
  }

  addHotelDetails(hotelData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/addHotelDetails`, hotelData);
  }

  addbookRooms(hotelbData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/addbookRooms`, hotelbData);
  }

  deleteHotel(hname: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/deleteHotel/${hname}`);
  }

  bookRoom(bookingData: any): Observable<any> {
    return this.http.put<any>(`${this.baseURL}/bookRoom`, bookingData);
  }

}
