import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_URL: string = environment.API_URL;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient,
              public router: Router){}

  login(email: string, password: string) {
    const credentials = {
      email: email.toLowerCase(),
      password: password
    }
    return this.httpClient.post<any>(`${this.API_URL}/login`, credentials , {headers: this.headers})
      .subscribe((res: any) => {
        localStorage.setItem('access_token', res.token);
        console.log(res.token);
        this.router.navigate(['home']);
      })
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  logout() {
    if (localStorage.removeItem('access_token') == null) {
      this.router.navigate(['/login']);
    }
  }
}
