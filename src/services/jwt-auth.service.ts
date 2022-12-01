import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JwtAuth} from "../models/api/jwt-auth";

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {

  public static KEY_TOKEN: string = 'TOKEN';

  constructor(private httpClient: HttpClient) { }

  public getToken(): Observable<JwtAuth> {
    localStorage.removeItem(JwtAuthService.KEY_TOKEN);
    return this.httpClient.post<JwtAuth>(
      'https://127.0.0.1:8000/api/login_check',
      {
        "email": "oui@gmail.com",
        "password": "12345"
      },
      this.getHeaders()
    );
  }

 public getCountries(page: number = 1): Observable<any> {
   return this.httpClient.get(
     'https://127.0.0.1:8000/api/countries?page=' + page,
     this.getHeaders()
   );
 }

 private getHeaders(): {headers: HttpHeaders} {
    let jsonHeaders: {headers: HttpHeaders} = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json',
     })
    };
    const token: string|null = localStorage.getItem(JwtAuthService.KEY_TOKEN);
    if (token) {
      jsonHeaders = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + token
        })
      };
    }
    return jsonHeaders;
 }

}
